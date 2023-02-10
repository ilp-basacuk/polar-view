# Polar View

This repository is a monorepo using [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) and contains two different applications in three different packages on the ```packages``` directory):

- High bandwidth: [readme](/packages/high-bandwith/README.md)
- Low bandwidth: [readme](/packages/low-bandwith/README.md)
- Core: This serves the common configuration. The [tailwind](https://tailwindcss.com/) styles that both applications use.

## Getting started

Use

```bash
yarn install
```

 at the root of the monorepo to install all packages. The node_modules will then be stored always at the root and used on the different projects.

There are two scripts that work as shortcuts to use the different commands on the low and high version:

```bash
yarn high ...
```

will run commands on the high bandwidth version

```bash
yarn low ...
```

will run commands on the low bandwidth version

E.g.

```bash
yarn high dev
```

will run the dev environment from the high bandwidth version

## Deployment

This project is initally deployed on the vercel platform but any alternative host could be used. The current setup uses three different deploys two for the two main applications and the storybook with the components documentation.

## Testing

For the high-bandwith version of the app we are using [cypress](https://www.cypress.io/), which is and end-to-end (e2e) testing library but also allows unit testing.

The e2e tests examples are on the cypress/integration folder and the unit tests under cypress/unit.

### How to run the tests

To open the cypress GUI use
```bash
yarn high cypress:open
```

or for the unit tests

```bash
yarn high cypress:unit:open
```

Also you can run the tests on headless mode with the following commands:
```bash
yarn high cypress:run
```

and

```bash
yarn high cypress:unit:run
```
