<h1 align="center">
  <a href="https://upload.io/uploader">
    <img alt="Uploader" width="276" height="80" src="https://raw.githubusercontent.com/upload-io/assets/master/logo-uploader.svg">
  </a>
</h1>

<p align="center"><b>Vue File Upload Component for <a href="https://upload.io/">Upload.io</a></b><br/> (Vue Wrapper for <a href="https://upload.io/uploader">Uploader</a>)</p>
<br/>
<p align="center">
  <a href="https://github.com/upload-io/vue-uploader/">
    <img src="https://img.shields.io/badge/gzipped-29%20kb-4ba0f6" />
  </a>

  <a href="https://www.npmjs.com/package/vue-uploader">
    <img src="https://img.shields.io/badge/vue--uploader-npm-4ba0f6" />
  </a>

  <a href="https://github.com/upload-io/vue-uploader/actions/workflows/ci.yml">
    <img src="https://img.shields.io/badge/build-passing-4ba0f6" />
  </a>

  <a href="https://www.npmjs.com/package/vue-uploader">
    <img src="https://img.shields.io/npm/dt/vue-uploader?color=%234ba0f6" />
  </a>
  <br/>

  <a href="https://www.npmjs.com/package/vue-uploader">
    <img src="https://img.shields.io/badge/TypeScript-included-4ba0f6" />
  </a>

  <a href="https://github.com/upload-io/vue-uploader/actions/workflows/ci.yml">
    <img src="https://img.shields.io/npms-io/maintenance-score/vue-uploader?color=4ba0f6" />
  </a>

  <a target="_blank" href="https://twitter.com/intent/tweet?text=I%20just%20found%20Uploader%20%26%20Upload.io%20%E2%80%94%20they%20make%20it%20super%20easy%20to%20upload%20files%20%E2%80%94%20installs%20with%207%20lines%20of%20code%20https%3A%2F%2Fgithub.com%2Fupload-io%2Fuploader&hashtags=javascript,opensource,js,webdev,developers&via=UploadJS">
    <img alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fupload-io%2Fuploader%2F" />
  </a>

</p>

<h1 align="center">
  Quick Start — <a href="https://codepen.io/upload-js/pen/popWJpX?editors=1010">Try on CodePen</a>
</h1>

<p align="center">To create a file upload button:</p>

```shell
npm install @upload-io/vue-uploader
```

```javascript
import { Uploader } from "uploader";
import { UploadButton } from "@upload-io/vue-uploader";

const uploader = new Uploader({
  // Get production API keys from Upload.io
  apiKey: "free"
});

<UploadButton uploader={uploader}
              options={{multi: true}}
              onComplete={files => console.log(files)}>
  {({onClick}) =>
    <button onClick={onClick}>
      Upload a file...
    </button>
  }
</UploadButton>
```

# Installation

Install via NPM:

```shell
npm install @upload-io/vue-uploader
```

Or via YARN:

```shell
yarn add @upload-io/vue-uploader
```

Or via a `<script>` tag:

```html
<script src="https://js.upload.io/vue-uploader/v1"></script>
```

## Initialize

Initialize once at the start of your application:

```javascript
import { Uploader } from "uploader";

// Get production API keys from Upload.io
const uploader = new Uploader({
  apiKey: "free"
});
```

## Choose a Component

`@upload-io/vue-uploader` provides two UI components:

### (1) File Upload Button

```javascript
import { UploadButton } from "@upload-io/vue-uploader";

<UploadButton uploader={uploader}
              options={{multi: true}}
              onComplete={files => console.log(files)}>
  {({onClick}) =>
    <button onClick={onClick}>
      Upload a file...
    </button>
  }
</UploadButton>
```

### (2) Dropzone

```javascript
import { UploadDropzone } from "@upload-io/vue-uploader";

<UploadDropzone uploader={uploader}
                options={{multi: true}}
                onUpdate={files => console.log(files)}
                width="600px"
                height="375px" />
```

## The Result

The `onComplete` callback receives a `Array<UploaderResult>`:

```javascript
{
  fileUrl: "https://upcdn.io/FW25...",          // The URL to use when serving this file.

  editedFile: undefined,                        // The edited file (if present). Same as below.

  originalFile: {
    accountId: "FW251aX",                       // The Upload.io account that owns the file.
    file: { ... },                              // DOM file object (from the <input> element).
    fileId: "FW251aXa9ku...",                   // The uploaded file ID.
    fileUrl: "https://upcdn.io/FW25...",        // The uploaded file URL.
    fileSize: 12345,                            // File size in bytes.
    mime: "image/jpeg",                         // File MIME type.
    suggestedOptimization: {
      transformationUrl: "https://upcdn.io/..", // The suggested URL for serving this file.
      transformationSlug: "thumbnail"           // Append to 'fileUrl' to produce the above URL.
    },
    tags: [                                     // Tags manually & auto-assigned to this file.
      { name: "tag1", searchable: true },
      { name: "tag2", searchable: true },
      ...
    ]
  }
}
```

## Full Documentation

`@upload-io/vue-uploader` is a Vue wrapper for `uploader`.

Please see: **[Uploader Docs](https://github.com/upload-io/uploader#%EF%B8%8F-configuration)**.

## Contribute

If you would like to contribute to Uploader:

1. Add a [GitHub Star](https://github.com/upload-io/vue-uploader/stargazers) to the project (if you're feeling generous!).
2. Determine whether you're raising a bug, feature request or question.
3. Raise your issue or PR.

## License

[MIT](LICENSE)
