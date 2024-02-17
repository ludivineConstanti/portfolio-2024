# 🗂️ Choosing a CMS

## 🤔 Is a CMS useful?

For [my previous portfolio](https://ludivine-constanti.surge.sh/), I didn’t use any CMS. The text was hard coded (which didn’t have a big impact since there wasn’t much content). My new portfolio, however, will have a lot more content to manage, which makes a CMS necessary.

Indeed, being able to edit the content easily is important for the project to grow, without getting too messy, and a CMS has multiple benefits to facilitate this editing experience:

- It offers multiple content types: you can add simple text, a date, a slug, images… They all have different properties that come with them: automatic checks to see if the slug is correct, the date offers a dropdown calendar for you to choose…
- There is a rich text editor, which allows you to add text with links and headings in it easily.
- Searching through your content is easier: it can offer some functionalities such as a search bar, ordering content based on alphabetical order, or on when the file was created…
- You can reference items: it’s essential to be able to edit content only once and have it updated on every single page. I made this discovery while performing the accessibility audit of the [Figures portfolio](https://figures.cc/en/) where I wanted to add a lang attribute to some English words that were used in the German version of the website. Instead of updating it in every single place individually, I regrouped items that appeared on multiple pages (client names, skills…) and used an ID system to fetch them everywhere. This had the added benefits that it improved consistency and removed some typos.

## ⚔️ Comparing CMS

I wasn’t sure which CMS to take for the project, since I never used any of them with Next.js before. I wanted one that is commonly used together with Next.js, to make sure it is well-documented, stable, quick to set up, and easy to use. I also wanted one which has a generous free-tier plan, since I think that paying for a CMS for a small personal project is an unnecessary cost.

Vercel shows a few options available on its integration page. I looked through it, compared it to the other article I read online, and looked for a CMS that has a large number of installations. The articles about Contentful made it clear that it was focused on large enterprises as a customer base, and did not put a lot of focus on their free plan. I decided to use Sanity since it has a lot of good reviews for its ease of use, generous free tier, and large user base.

## 🗂️ Installing Sanity

I had a minor bug after installing it, which was due to Framer Motion. Reinstalling Framer Motion separately fixed it, and the rest was easy to set up. I found a [YouTube tutorial on how to use it with Next.js](https://www.youtube.com/watch?v=OcTPaUfay5I&t=6440s). Unfortunately, I did not get it to work with the newest Next.js router system, which uses the App folder. The CMS launched properly, but I was not able to query the data from the components. I am not sure what went wrong, since from the documentation and the tutorial, there are only 1 or 2 lines of codes that are necessary, so I am pretty confident I did it correctly.

Since being able to get my portfolio up and running quickly was more important to me than using the newest router solution from Next.js and I wasn’t sure if the bug was due to Next.js new router solution not being entirely stable, I decided to try the pages router system. This worked perfectly fine, so I ended up using it.

## 💬 GROQ language query

I wasn’t sure whether to use the GraphQL or default GROQ query language since I already know how to use GraphQL, and learning a new query language didn’t seem appealing. I read [a comparison from the Sanity blog](https://www.sanity.io/docs/what-about-graphql) which explained why they decided against using GraphQL, while being aware that it’s more broadly used since they believe that GROQ is more convenient and more powerful. After reading a few examples of GROQ queries, and deciding that it would be pretty straightforward to use, I decided to try it out.

I am happy with my choice since this query language is quite convenient, and using GraphQL could have brought some difficulties down the line (since tools that are not meant to be used by default are more difficult to set up, often less stable, and more difficult to debug).
