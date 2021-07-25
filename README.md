# Blank Theme

A blank theme. Preview: [https://blank-preview.lamnhan.com](https://blank-preview.lamnhan.com)

## Getting started

To use this theme, clone this repo, or using [the Mola all-in-one CLI](https://mola.lamnhan.com):

```sh
# Install Mola all-in-one CLI
npm i -g @molacms/cli

# Create a new project
mola new blank <projectName>

# CLI params & options:
# mola new blank <projectName> [appDomain] [appName] [appDescription] --themes [list] --locales [list] --deploy [service]

# Example:
# mola new blank foo "foo.com" "Foo App" "The Awesome Foo Web App" --deploy github
```

Project scripts:

- `npm run build`: build the web app
- `npm run deploy`: deploy the web app

## Modify content

Optionally, you may also want to modify:

- **LICENSE**: anything
- **package.json**: Change `author`, `license`, `keywords`, `repository`, `bugs`
- **src/index.html**: Change `author`, `twitter:site`, `twitter:creator`, `fb:app_id`

## Add content

- Add a component (manually adding `[name].module.ts` after the command):

```sh
npx ng g c components/[name] --skip-import
```

- Add a page:

```sh
npx ng g m pages/[name] --route [name] --module app.module
```

## License

This theme is released under the [MIT](https://github.com/themolacms/blank/blob/master/LICENSE) license.
