# Debugging: Tailwind CSS

## Margins not displaying on Chrome v122

While asking other users to test the website, to get feedback on the UX, I noticed that some styles were not being displayed properly. The padding on the work experiences was non-existent, as well as the padding at the top and the bottom of the “All Projects” and “All Articles” pages.

I asked which browser and which version they were using (Chrome v122) and curiously, could not reproduce it on my laptop, even though I have Chrome installed, with the same version.

Not being able to test the bug on my own computer made it more challenging to solve it, but thankfully, I had enough information to spot a pattern: most CSS styles were getting applied, but the ones that used classes, which used CSS variables in them were not working properly. After that discovery, I decided to refactor the code, to use it in the way that Tailwind CSS originally intended.

### Before

CSS variables are used in CSS classes to add the padding (a class with py in its name will add padding on top & bottom, one with pb in its name will add the padding only on the bottom...).

globals.css

```css
:root {
  /* home page */

  --home-max-w-xl: 68.75rem;

  --home-article-padding-base: 1rem;
  --home-article-padding-sm: 2rem;
  --home-article-padding-xl: 4rem;

  --home-article-padding-small-base: 1rem;
  --home-article-padding-small-sm: 2rem;
  --home-article-padding-small-xl: 2rem;

  /* all articles and all projects page */

  --all-projects-all-articles-margin-base: 5rem;
  --all-projects-all-articles-margin-sm: 5rem;
  --all-projects-all-articles-margin-xl: 8rem;
}

@layer components {
  /* home components */

  .home-max-w {
    @apply max-w-[40rem];
    @apply xl:max-w-[var(--home-max-w-xl)];
  }

  /* home article padding */

  .home-article-padding {
    @apply p-[var(--home-article-padding-base)];
    @apply sm:p-[var(--home-article-padding-sm)];
    @apply xl:p-[var(--home-article-padding-xl)];
  }

  .home-article-padding-x {
    @apply px-[var(--home-article-padding-base)];
    @apply sm:px-[var(--home-article-padding-sm)];
    @apply xl:px-[var(--home-article-padding-xl)];
  }

  .home-article-padding-y {
    @apply py-[var(--home-article-padding-base)];
    @apply sm:py-[var(--home-article-padding-sm)];
    @apply xl:py-[var(--home-article-padding-xl)];
  }

  .home-article-padding-t {
    @apply pt-[var(--home-article-padding-base)];
    @apply sm:pt-[var(--home-article-padding-sm)];
    @apply xl:pt-[var(--home-article-padding-xl)];
  }

  .home-article-padding-b {
    @apply pb-[var(--home-article-padding-base)];
    @apply sm:pb-[var(--home-article-padding-sm)];
    @apply xl:pb-[var(--home-article-padding-xl)];
  }

  /* home article padding small */

  .home-article-padding-small-y {
    @apply py-[var(--home-article-padding-small-base)];
    @apply sm:py-[var(--home-article-padding-small-sm)];
    @apply xl:py-[var(--home-article-padding-small-xl)];
  }

  .home-article-padding-small-t {
    @apply pt-[var(--home-article-padding-small-base)];
    @apply sm:pt-[var(--home-article-padding-small-sm)];
    @apply xl:pt-[var(--home-article-padding-small-xl)];
  }

  .home-article-padding-small-b {
    @apply pb-[var(--home-article-padding-small-base)];
    @apply sm:pb-[var(--home-article-padding-small-sm)];
    @apply xl:pb-[var(--home-article-padding-small-xl)];
  }

  /* all articles and all projects page */

  .all-projects-all-articles-my {
    @apply my-[var(--all-projects-all-articles-margin-base)];
    @apply sm:my-[var(--all-projects-all-articles-margin-sm)];
    @apply xl:my-[var(--all-projects-all-articles-margin-xl)];
  }

  .all-projects-all-articles-gap {
    @apply gap-[var(--all-projects-all-articles-margin-base)];
    @apply sm:gap-[var(--all-projects-all-articles-margin-sm)];
    @apply xl:gap-[var(--all-projects-all-articles-margin-xl)];
  }

  .all-projects-all-articles-pt {
    @apply pt-[var(--all-projects-all-articles-margin-base)];
    @apply sm:pt-[var(--all-projects-all-articles-margin-sm)];
    @apply xl:pt-[var(--all-projects-all-articles-margin-xl)];
  }

  .all-projects-all-articles-pb {
    @apply pb-[var(--all-projects-all-articles-margin-base)];
    @apply sm:pb-[var(--all-projects-all-articles-margin-sm)];
    @apply xl:pb-[var(--all-projects-all-articles-margin-xl)];
  }

  /* Project page */

  .project-max-w {
    @apply sm:max-w-[42rem];
    @apply xl:max-w-[var(--home-max-w-xl)];
  }
}
```

### After

The names are added in the Tailwind CSS configuration file directly, instead of creating it manually in the global CSS file. Tailwind will make the values available for us automatically. This method has the advantage that it's less lines of code, and therefore faster to set up. The only downside is that instead of being able to use only one class to add a max width, padding or margin somewhere, I need to add a class for every breakpoint every time.

tailwind.config.ts

```typescript
const config: Config = {
  theme: {
    extend: {
      maxWidth: {
        home: "40rem",
        "home-xl": "68.75rem",
        project: "42rem",
      },
      padding: {
        "home-article": "1rem",
        "home-article-sm": "2rem",
        "home-article-xl": "4rem",
      },
      spacing: {
        "individual-page": "5rem",
        "individual-page-xl": "8rem",
      },
    },
  },
};
```

After asking one of the users who had the issue if they could test it again on their computer, I could confirm that the problem is now gone.
