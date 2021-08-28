# @dimensionalpocket/release

[![build](https://github.com/dimensionalpocket/release-js/actions/workflows/node.js.yml/badge.svg)](https://github.com/dimensionalpocket/release-js/actions/workflows/node.js.yml) [![Total alerts](https://img.shields.io/lgtm/alerts/g/dimensionalpocket/release-js.svg)](https://lgtm.com/projects/g/dimensionalpocket/release-js/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/dimensionalpocket/release-js.svg)](https://lgtm.com/projects/g/dimensionalpocket/release-js/context:javascript)

This package includes [release-it](https://github.com/release-it/release-it) packages, plugins, and configuration defaults used by other release-able projects:

* `release-it`
* `release-it/bumper`

## Installation

Install the package directly from GitHub (X.Y.Z == release tag):

```shell
npm i -D -E github:dimensionalpocket/release-js#X.Y.Z
```

## Configuration

To make `release-it` use the configuration from this library, change the `npm run release` command as follows:

```json
{
  "scripts": {
    ...,
    "release": "release-it --config ./node_modules/@dimensionalpocket/release/config/default.js"
  },
}
```

### `version.json`

Upon generating a release, a `version.json` file will be created in the root of the project and committed to the repository. This is to allow packages to be able to retrieve their own version numbers without having to require `package.json`.
