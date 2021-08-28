# @dimensionalpocket/release

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

## `version.json`

Upon generating a release, a `version.json` file will be created in the root of the project and committed to the repository. This is to allow packages to be able to retrieve their own version numbers without having to require `package.json`.

### Pre-release

If you want to force a pre-release state in GitHub without changing the version format (note the `--` separator):

```shell
$ npm run release -- --github.preRelease
```

Alternatively, to add a `beta.0` suffix to the version number:

```shell
$ npm run release -- --preRelease=beta
```

Otherwise `release-it` will set it automatically according to semver.
