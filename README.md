# Turborepo Next.js Example

This repository is a resource to a [blog post]((https://coheneyal.com/blog/adding-turborepo-to-existing-project)) I made on adding [turborepo]([turborepo](https://turborepo.dev) to an existing project.

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


