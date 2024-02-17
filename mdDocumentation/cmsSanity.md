# 🗂️ Sanity

## ✍️ User experience

The editing experience in Sanity is quite nice, as it has multiple features to improve it:

- The UI design is simple and modern.
- It allows you to expand text fields to the entire page, which is nice if you want to use it to write long text.
- It has a search field that you can use if you’re looking for another item in the CMS.
- If the item you're looking for does not exist yet, it lets you add a new one in another tab, without leaving the page you were editing.
- It tells you if a field becomes invalid (because the schema configuration was updated) and asks you if you want to delete it (this feature does not exist in Decap CMS, if a field type is removed, the corresponding data entry is ignored and it needs to be manually deleted in the file directly).
- It signals you if you can use the current text as a slug or not (having 2 identical slugs in the data would cause issues on the website).
- It's able to hot reload.

![sanity](https://github.com/ludivineConstanti/portfolio-2024/assets/24965333/a7d5d211-27e3-4811-94bf-623aa95666f6)

## ✅ TypeScript

I like that it’s possible to create the schemas, for the CMS, in TypeScript. I am used to Decap CMS, where it is necessary to define the fields in a YAML or JSON file, which I find a lot less convenient (since the risk of making a typo or forgetting a field is higher, without the static type checking, I spend a lot more time double-checking and debugging the configuration).

## 💬 GROQ query language

The GROQ query language is quite easy to use and convenient. It is also great to use in combination with GitHub Copilot since I can copy and paste the schema I defined into it and ask it to generate the appropriate query for me.

This is my favorite use of AI, since it’s much faster to ask it directly what I want than having to go through the documentation. Plus, this use does not have the inaccuracy risk linked to AI, since I can directly test if the query works.

## 📄 Single page content

Usually, while using a CMS, I either define the content in individual pages, which will only be used once in the website, or collections. I was pretty confident that Sanity would have this feature as well since it’s a basic one. When I looked for it, however, I found out that Sanity only supports collections with multiple identical items. It is possible to create single entries, but it’s a collection with a restriction on top of it, which blocks users from creating more than 1 entry.

This was a bit disappointing, but since creating a single entry in the collection type worked fine, I used this solution. Since I am the only one working on this project, there’s no risk of another person creating a second entry by mistake, so I didn’t feel the need to configure my CMS to block it.

## 💾 Storage

Sanity stores data on the cloud only. I would have preferred to have it stored in my GitHub repository, alongside my code, especially since it would make data versioning more convenient. I am not sure if there is any possibility of accessing backup data or versioning with Sanity.
