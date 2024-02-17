# ⚔️ Styled Components VS Tailwind CSS

## 🍯 CSS in JS

I discovered Styled Components while looking for a solution to make CSS and JavaScript communicate. This was necessary because I had some animations based on text length and some values that could not be hard coded into CSS. Since then, I used it in a lot of projects, I like the workflow it gives, the ability to use it with TypeScript to get static type-checking, being able to tell easily which code is unused and reuse values inside the code.

## ⚙️ Performance

While choosing my tech-stack, for my portfolio, I wondered whether I should use Styled Components, or Tailwind CSS, which I recently started using at work. Tailwind CSS is not my favorite, so far, since I am used to writing plains CSS, it slows me down (I have to google to know which Tailwind class to use all the time), and it does not offer the static type-checking given by CSS in JS. I thought I would still read some articles to gain more insight into their pros and cons. I then found out [multiple articles](https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b?source=post_page-----93c3f9fd59b1--------------------------------) mentioning that it’s much better for performance. Since the styles and animations in my portfolio are not very complex, I decided that the performance benefits it offers are more important.

I also discovered twin.macro, during my research, which is a compromise between the two. But I decided against using it since [others complained of its performance too](https://blog.railway.app/p/twin-macro-tailwind-migration).

## 🎆 Tailwind CSS for fast UI development

Afterward, I realized that Tailwind CSS is great for my use case since it offers a ready-made design system (colors, screen sizes, drop-shadows). This helps to save time for projects, that do not have the constraints of following the design guidelines of a client and saved me the trouble of needing to come up with my own color system. I also like that it’s guiding developers to follow CSS best practices (using rem as the default unit…).

After making this decision and setting up my Next.js project, I found out that Tailwind is suggested as the default styling solution, which made me glad I chose to use it.
