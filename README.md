# Turborepo Next.js Example

This repository is a resource to a [blog post]((https://coheneyal.com/blog/adding-turborepo-to-existing-project)) I made on adding [turborepo](https://turborepo.dev) to an existing project.

It came after I've made a [PR](https://github.com/steven-tey/novel/pull/87) converting the [novel](https://novel.sh) website from a website to an npm package. Since it was a bit of a hassle, I decided to write a blog post about it and help others who might want to do the same.

It structured as follows:
```
- apps
  - website
  - dashboard
- packages
  - ui
```

The `website` and `dashboard` are Next.js apps, both rendering the `SignIn` component from the `ui` package.

You can run the apps locally by `pnpm install` and then `pnpm dev` in the `website` and `dashboard` directories.

## Tech
- [turborepo](https://turborepo.dev)
- [Next.js](https://nextjs.org)
- [shadcn/ui](https://ui.shadcn.com)
- [tsup](https://tsup.egoist.dev)


