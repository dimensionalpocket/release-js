# @dimensionalpocket/release

[![build](https://github.com/dimensionalpocket/release-js/actions/workflows/node.js.yml/badge.svg)](https://github.com/dimensionalpocket/release-js/actions/workflows/node.js.yml) [![Total alerts](https://img.shields.io/lgtm/alerts/g/dimensionalpocket/release-js.svg)](https://lgtm.com/projects/g/dimensionalpocket/release-js/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/dimensionalpocket/release-js.svg)](https://lgtm.com/projects/g/dimensionalpocket/release-js/context:javascript)

This package includes [release-it](https://github.com/release-it/release-it) packages, plugins, and configuration defaults used by other release-able projects:

* `release-it`
* `release-it/bumper`

## Configuration

To make `release-it` use the configuration from this library, change the `npm run release` command as follows:

```json
{
  "scripts": {
    "release": "release-it --config ./node_modules/@dimensionalpocket/release/config/default.cjs"
  },
}
```

### `version.json`

Before releasing the first version of your package, create and commit an empty `version.json` file in the root folder. Upon generating a release, the file will then be updated and committed.

Having a `version.json` file allows packages to be able to retrieve their own version numbers without having to require `package.json`, which sometimes can lead to security vulnerabilities for private repos.

## Installation

Install the package directly from GitHub (X.Y.Z == release tag):

```shell
npm i -D -E github:dimensionalpocket/release-js#X.Y.Z
```

## License

MIT
