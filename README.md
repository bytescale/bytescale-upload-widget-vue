<h1 align="center">
  <a href="https://upload.io/uploader">
    <img alt="Vue Uploader" width="267" height="106" src="https://raw.githubusercontent.com/upload-io/vue-uploader/main/.github/assets/logo.svg">
  </a>
</h1>

<p align="center"><b>Vue File Upload Widget</b><br/> (With Integrated Cloud Storage)</p>

<p align="center">Vue Wrapper for <a href="https://upload.io/uploader">Uploader</a> • Developed by <a href="https://upload.io/">Upload.io</a><br/><br/></p>

<p align="center">
  <a href="https://github.com/upload-io/vue-uploader/">
    <img src="https://img.shields.io/badge/gzipped-29%20kb-4ba0f6" />
  </a>

  <a href="https://www.npmjs.com/package/@upload-io/vue-uploader">
    <img src="https://img.shields.io/badge/@upload--io/vue--uploader-npm-4ba0f6" />
  </a>

  <a href="https://github.com/upload-io/vue-uploader/actions/workflows/ci.yml">
    <img src="https://img.shields.io/badge/build-passing-4ba0f6" />
  </a>

  <a href="https://www.npmjs.com/package/@upload-io/vue-uploader">
    <img src="https://img.shields.io/npm/dt/vue-uploader?color=%234ba0f6" />
  </a>
  <br/>

  <a href="https://www.npmjs.com/package/@upload-io/vue-uploader">
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
  Quick Start —
  <a href="https://codepen.io/upload-js/pen/yLpvYew?editors=1010">
    Try on CodePen
  </a>
</h1>

<p align="center"><a href="https://upload.io/uploader"><img alt="Upload Widget Demo" width="100%" src="https://raw.githubusercontent.com/upload-io/vue-uploader/main/.github/assets/demo.webp"></a></p>

<p align="center">To implement the above widget:</p>

```shell
npm install @upload-io/vue-uploader
```

```html
<template>
  <button @click="uploadFile">Upload a file...</button>
</template>

<script>
import { Uploader } from "uploader";
import { openUploader } from "@upload-io/vue-uploader";

// Create one instance per app. (Get API keys from Upload.io)
const uploader = new Uploader({
  apiKey: "free"
});

// See "customization" below.
const options = {
  multi: true
};

export default {
  name: "App",
  methods: {
    uploadFile(event) {
      openUploader({
        event,
        uploader,
        options,
        onComplete: (files) => {
          if (files.length === 0) {
            console.log("No files selected.");
          } else {
            console.log("Files uploaded:");
            console.log(files.map(f => f.fileUrl));
          }
        }
      })
    }
  }
};
</script>
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

## Usage

Vue Uploader provides two options:

### Option 1) File Upload Button

Create a file upload button using the `openUploader` helper:

```html
<template>
  <button @click="uploadFile">Upload a file...</button>
</template>

<script>
import { Uploader } from "uploader";
import { openUploader } from "@upload-io/vue-uploader";

// Create one instance per app. (Get API keys from Upload.io)
const uploader = new Uploader({
  apiKey: "free"
});

// See "customization" below.
const options = {
  multi: true
};

export default {
  name: "App",
  methods: {
    uploadFile(event) {
      openUploader({
        event,
        uploader,
        options,
        onComplete: (files) => {
          if (files.length === 0) {
            console.log("No files selected.");
          } else {
            console.log("Files uploaded:");
            console.log(files.map(f => f.fileUrl));
          }
        }
      })
    }
  }
};
</script>
```

### Option 2) Dropzone

Create a file upload dropzone using the `UploadDropzone` component:

```html
<template>
  <UploadDropzone :uploader="uploader"
                  :options="options"
                  :on-update="onFileUploaded"
                  width="600px"
                  height="375px" />
</template>

<script>
import { Uploader } from "uploader";
import { UploadDropzone } from "@upload-io/vue-uploader";

// One instance per app.
const uploader = new Uploader({ apiKey: "free" });

// See "customization" below.
const options = {
  multi: true
};

export default {
  name: "App",
  components: {
    UploadDropzone
  },
  data() {
    return {
      uploader,
      options
    };
  },
  methods: {
    onFileUploaded: (files) => {
      if (files.length === 0) {
        console.log("No files selected.");
      } else {
        console.log("Files uploaded:");
        console.log(files.map(f => f.fileUrl));
      }
    }
  }
};
</script>
```

## The Result

The callbacks receive a `Array<UploaderResult>`:

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

Vue Uploader is a wrapper for Uploader — see the **[Uploader Docs](https://github.com/upload-io/uploader#%EF%B8%8F-configuration)** 📖

## Where are my files stored?

Uploader uses [Upload.io](https://upload.io) as a storage and file hosting backend.

Upload.io benefits developers with:

- Zero Setup (Start uploading in the next few minutes!)
- Pre-Integrated Storage (All you need is an Upload API key)
- Fast File Hosting (Worldwide CDN, 300 Nodes)
- Powerful Rules Engine (Rate Limiting, Traffic Limiting, IP Blacklisting, Expiring Links, etc)
- File Transformations (Image Resizing, Cropping, Optimization, etc)

### Can I bring my own file storage?

Uploader's USP is to provide developers with the least amount of work possible, while remaining customizable. As such, Uploader will always be closely integrated with the Upload.io platform, and there are currently no plans to support custom backends. You may, however, sync files from your Upload.io account to a custom storage target.

## Contribute

If you would like to contribute to Uploader:

1. Add a [GitHub Star](https://github.com/upload-io/vue-uploader/stargazers) to the project (if you're feeling generous!).
2. Determine whether you're raising a bug, feature request or question.
3. Raise your issue or PR.

## License

[MIT](LICENSE)
