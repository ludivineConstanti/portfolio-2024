# 🚄 Performance

## 🏆 Best practices

To improve the performance of the website, I read the [best practices to query information using GROQ](https://www.sanity.io/docs/high-performance-groq). I found out that it’s better to merge queries and decided to test the impact it has on the website. I first checked the performance score with Lighthouse. Based on the result, it would seem that merging queries worsens the performance. After some additional tests with Lighthouse, I decided that its performance scores were not stable enough to be used as a reliable metric. I then looked for another way to evaluate the code and decided to use console.time() and console.timeEnd().

Measuring the performance with console.time() also gives unstable results, but the error margin is smaller. While using it, the variation between results had a maximum of 100ms (while using the website in incognito mode). The individual project page had originally 5 different GROQ queries, which were resolved at an average time of 622ms. After merging the queries down to 2 (I couldn’t merge it further, since I need a value from the 1st query to perform the 2nd) I got an average of 291ms. After testing simple dummy queries, it seems that a GROQ query takes a minimum of 100ms. So removing the need for 3 queries would generally reduce the execution time by 300ms. After seeing those numbers, I decided to merge the queries, as much as possible, on all pages.

## 📰 All Articles page

### ⏱️ Before

```tsx
const dataProjects =
  await client.fetch(groq`*[_type == "project"] | order(dateEnd desc){
	skillBadges[]->{_id}  
}`);

const dataArticles =
  await client.fetch(groq`*[_type == "article"] | order(date desc){
	${queryArticleLink}
}`);

const dataSkills =
  await client.fetch(groq`*[_type == "skillBadge"] | order(text asc){
	_id,
  text,
}`);
```

### ⏱️ After

```tsx
const data = await client.fetch(groq`{
	"projects": *[_type == "project"] | order(dateEnd desc){
		  skillBadges[]->{_id}  
   },
   "articles": *[_type == "article"] | order(date desc){
      ${queryArticleLink}
    },
    "skills": *[_type == "skillBadge"] | order(text asc){
       _id,
       text,
     }
   }`);
```

GROQ has a list of additional recommendations, but unfortunately, the performance impact is much smaller (at least for my project, since the dataset always stays under 100 items), so the difference is harder to notice with console.time().

## ❌ Adding a != null check

For example, another best practice of GROQ is to add a check to see if the property is defined, before making a comparison, since it fetches fewer items. After making a test with the query, the one which does not check if the property exists takes 99ms to execute, while the other one takes 118ms. Knowing that 20ms is under the margin of error that we have to take into account, I will follow this recommendation without being able to properly test it.

```tsx
const articleQuery1 = await client.fetch(
  groq`*[_type == "article" && $projectId && $projectId in projects[]->_id] | order(text asc){
        _id,
        emoji,
        text,
        href,
        projects[]->{_id}, 
      }`,
  { projectId: projectData[0]._id },
);
```

99.675ms

```tsx
const articleQuery2 = await client.fetch(
  groq`*[_type == "article" && $projectId != null && $projectId in projects[]->_id] | order(text asc){
        _id,
        emoji,
        text,
        href,
        projects[]->{_id}, 
      }`,
  { projectId: projectData[0]._id },
);
```

118.015ms

## 🗒️ Specifying all the fields, in the query

In the same way, this 1st query retrieves all the fields for the skill badges, while the 2nd one specifies only the ones we need. The difference between the 2 should be quite small since skill badges only have the properties text and emoji (but it still fetches less data, since using the spread operator {…} fetches all the properties created by sanity, by default (such as: \_createdAt, \_updatedAt…). The difference between the 2 queries is under 1ms which is also too small to take into account.

```tsx
const skillBadges1 = await client.fetch(
  groq`*[_type == "project" && slug.current == $project]{
        skillBadges[]->{...}, 
    }`,
  { project },
);
```

103.288ms

```tsx
const skillBadges2 = await client.fetch(
  groq`*[_type == "project" && slug.current == $project]{
        skillBadges[]->{_id,text,emoji}, 
    }`,
  { project },
);
```

103.38ms

## 🗂️ Sorting and mapping data with TypeScript

I also compared the score of the 2 queries (on the detailed project page) with the rest of the code (which is used to map and sort the data), to see if it has a significant impact on performance. The first query took 118ms, the 2nd 143ms, and the rest of the TypeScript code 0.82ms. So merging the GROQ queries stays the best performance opportunity gain I could find.

However, I found out that [using the spread operator {...} can add a lot of unnecessary data, which gets transferred to the page and reduces performance](https://github.com/ludivineConstanti/portfolio-2024/blob/main/mdDocumentation/performanceDataTransfer.md), which is why I still ended up removing them in the project.
