# Building From Source

This repository contains a hot-reloading sandbox for developing the `@upload-io/vue-uploader` NPM package.

## Prerequisites

`node` and `npm` are required — we actively support the following versions:

| Package | Version  |
| ------- | -------- |
| Node    | v12.22.0 |
| NPM     | v6.14.11 |

## How To Build & Run

### 1. Clone

```shell
git clone git@github.com:upload-io/vue-uploader.git
cd vue-uploader
```

### 2. Install Dependencies

```shell
npm install
```

### 3. Run The Sandbox

```shell
npm start
```

The above launches a **hot-reloading** server on `http://127.0.0.1:3040` that uses `@upload-io/vue-uploader` from source.

_Please ensure nothing else is running on TCP port `3040`_.
