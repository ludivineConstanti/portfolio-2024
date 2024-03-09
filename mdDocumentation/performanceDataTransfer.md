# 📨 Performance: optimizing data transfer

## ⚠️ Next.js performance warning

Next.js emitted a warning for both the All Articles and the All Projects page, saying the data transferred exceeds the threshold of 128 kB.

```bash
Warning: data for page "/all-articles" is 173 kB which exceeds the threshold of 128 kB, this amount of data can reduce performance.

See more info here: https://nextjs.org/docs/messages/large-page-data
```

```bash
Warning: data for page "/all-projects" is 155 kB which exceeds the threshold of 128 kB, this amount of data can reduce performance.
See more info here: https://nextjs.org/docs/messages/large-page-data
```

## ⚗️ Testing the All Projects page

To look at this problem more in detail, I used console.log(Buffer.byteLength(JSON.stringify(data)) / 1024).

```tsx
const data = {
  projects,
  articles,
  skillsFilter,
};

console.log("Data size in kB:", Buffer.byteLength(JSON.stringify(data)) / 1024);
```

I got a result of 151 kB, which is pretty close to the 155 kB Next.js signaled in its warning. This means that I can use this method to gain more insight into the weight of the transferred data.

I then divided it into multiple categories, since I query information from the projects, the articles, and the skills, for the filter.

```bash
Data size in kB for projects: 128.4921875
Data size in kB for articles: 15.6689453125
Data size in kB for skills filter: 6.87890625
```

From the result, it makes sense to focus on reducing the data size of the projects. Since they have multiple properties, I looked into the data weight of the project’s skill badges.

Data size in kB for projects skill badges: 101.302734375

From the result, it’s obvious that the skill badges are the issue. The ones used in the projects weigh 101 kB, while the ones queried for the filter are just 7 kB. It makes sense that the project badges would weigh more (since there are more of them) but not 15x more.

Since I looked into [GROQ best practices](https://www.sanity.io/docs/high-performance-groq), I know that it’s best to query the least amount of fields possible. Currently, the query for the skill badges uses the spread operator {…} which retrieves all of the available data. [While testing testing the execution time of the queries](https://github.com/ludivineConstanti/portfolio-2024/blob/main/mdDocumentation/performanceGROQ.md), I did not notice a big difference, in the query time, while using the spread operator or specifying the individual fields. Since those additional fields given by Sanity are still extra data, I tested the difference in data weight.

### Before

```tsx
    skillBadges[]->{…},
```

Data size in kB for projects skill badges: 101.302734375

### After

```tsx
    skillBadges[]->{_id,emoji,text},
```

Data size in kB for projects skill badges: 38.37890625

The data size is now 38 kB which is 63 kB less. The total data size for the All projects page is now 76 kB, which puts it well below the 128 kB recommended threshold.

## 📰 Testing the All Articles page

By updating this query, the data of the All Articles page was reduced to 158 kB, which is 15 kB less than before. This is still above the recommended threshold.

Once again, I used console.log(Buffer.byteLength(JSON.stringify(data)) / 1024) to inspect the different parts of the data.

```bash
Data size in kB projects: 22.435546875
Data size in kB skills filter: 6.87890625
Data size in kB articles: 129.2890625
```

This time, the article's data is too heavy. This does not have any apparent reason, since it consists of querying the category, emoji, text, href, date (which are mostly simple string values), and the skill badges of the articles (which use the same query as the ones in the All Project page, so this is already optimized)

```bash
Data size in kB category: 93.7919921875
Data size in kB Emoji: 0.3154296875
Data size in kB text: 1.869140625
Data size in kB href: 5.193359375
Data size in kB date: 0.595703125
Data size in kB skill badges: 20.671875
```

With 93 kB, the category is the clear winner. This query does not use the spread operator {…}, so the problem can not be the same as the skill badges.

```tsx
category->{_type,text,title},
```

I console.logged one category, to see which informations it contains.

```bash
{
    _type: 'project',
    text: [
            {
                style: 'normal',
                _key: 'b1596cfe1de6',
                markDefs: [],
                children: [Array],
                _type: 'block'
            },
            {
                markDefs: [],
                children: [Array],
                _type: 'block',
                style: 'h3',
                _key: '54dda4f2a51f'
            },
            {
                _type: 'block',
                style: 'normal',
                _key: '60478f744895',
                markDefs: [],
                children: [Array]
            }
        ],
title: 'Portfolio 2024'
}
```

There is a lot of unnecessary information, in there. Knowing that I already specified the minimum amount of fields, I decided to map the information, to not have to transmit it to the page.

```tsx
const articlesData = articles.map((e: ArticleData) => ({
  ...e,
  category:
    e.category._type === "project"
      ? `Project: ${e.category.title}`
      : e.category.text,
}));
```

This reduced the data size of the categories to 2.6 kB, reducing the total data size of the page to 67 kB, which is even less than for the All Projects page.
