# Polar view low bandwidth

Some of the features included are:

- This application uses [preact](https://preactjs.com/) a lightweight alternative to React via [preact-cli](https://github.com/developit/preact-cli/blob/master/README.md) to be able to reduce the bandwidth compared to the high bandwidth application.
- [Tailwind](https://tailwindcss.com/) as CSS Framework
- [Typescript](https://www.typescriptlang.org/) already configured
- editorconfig and code style based on [Airbnb](https://github.com/airbnb/javascript)
- [Storybook](https://storybook.js.org/) also available and configured

## Scripts

Serve with hot reload at localhost:8080
```bash
yarn low dev
```

build for production with minification

```bash
yarn low build
```

Test the production build locally
```bash
yarn low serve
```

Run tests with jest and enzyme

```bash
yarn low test
```
