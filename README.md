<h1 align="center">
  Migrated to: <a href="https://www.npmjs.com/package/@bytescale/upload-widget-vue">@bytescale/upload-widget-vue</a>
</h1>
<p align="center"><b>Vue File Upload Widget</b><br/> (With Integrated Cloud Storage)</p>
<br/>
<p align="center">
  <a href="https://github.com/bytescale/vue-uploader/">
    <img src="https://img.shields.io/badge/gzipped-33%20kb-4ba0f6" />
  </a>

  <a href="https://www.npmjs.com/package/@upload-io/vue-uploader">
    <img src="https://img.shields.io/badge/@upload--io/vue--uploader-npm-4ba0f6" />
  </a>

  <a href="https://github.com/bytescale/vue-uploader/actions/workflows/ci.yml">
    <img src="https://img.shields.io/badge/build-passing-4ba0f6" />
  </a>

  <a href="https://www.npmjs.com/package/@upload-io/vue-uploader">
    <img src="https://img.shields.io/npm/dt/@upload-io/vue-uploader?color=%234ba0f6" />
  </a>
  <br/>

  <a href="https://www.npmjs.com/package/@upload-io/vue-uploader">
    <img src="https://img.shields.io/badge/TypeScript-included-4ba0f6" />
  </a>

  <a href="https://github.com/bytescale/vue-uploader/actions/workflows/ci.yml">
    <img src="https://img.shields.io/npms-io/maintenance-score/@upload-io/vue-uploader?color=4ba0f6" />
  </a>

  <a target="_blank" href="https://twitter.com/intent/tweet?text=I%20just%20found%20Uploader%20%26%20Upload.io%20%E2%80%94%20they%20make%20it%20super%20easy%20to%20upload%20files%20%E2%80%94%20installs%20with%207%20lines%20of%20code%20https%3A%2F%2Fgithub.com%2Fupload-io%2Fuploader&hashtags=javascript,opensource,js,webdev,developers&via=UploadJS">
    <img alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fupload-io%2Fuploader%2F" />
  </a>

</p>
<h1 align="center">
  Get Started —
  <a href="https://codepen.io/bytescale/pen/yLpvYew?editors=1000">
    Try on CodePen
  </a>
</h1>

<p align="center"><a href="https://www.bytescale.com/docs/upload-widget/frameworks/vue"><img alt="Upload Widget Demo" width="100%" src="https://raw.githubusercontent.com/bytescale/vue-uploader/main/.github/assets/demo.webp"></a></p>

<p align="center">100% Serverless File Upload Widget  <br /> Powered by <a href="https://www.bytescale.com/">Bytescale</a><br/><br/></p>

<hr/>

<p align="center"><a href="https://www.bytescale.com/dmca" rel="nofollow">DMCA Compliant</a> • <a href="https://www.bytescale.com/dpa" rel="nofollow">GDPR Compliant</a> • <a href="https://www.bytescale.com/sla" rel="nofollow">99.9% Uptime SLA</a>
  <br/>
  <b>Supports:</b> Rate Limiting, Volume Limiting, File Size &amp; Type Limiting, JWT Auth, and more...
  <br />
</p>

<hr/>
<br />
<br />

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
<script src="https://js.bytescale.com/vue-uploader/v3"></script>
```

## Usage

Vue Uploader provides two options:

### Option 1) File Upload Button — [Try on CodePen](https://codepen.io/bytescale/pen/yLpvYew?editors=1000)

Create a file upload button using the `openUploadModal` helper:

```html
<template>
  <button @click="uploadFile">Upload a file...</button>
</template>

<script lang="ts">
  import { Uploader } from "uploader";
  import { openUploadModal } from "@upload-io/vue-uploader";
  import type { UploadWidgetConfig, UploadWidgetResult } from "uploader";
  import type { PreventableEvent } from "@upload-io/vue-uploader";

  // Create one instance per app. (Get API keys from Bytescale)
  const uploader = Uploader({
    apiKey: "free"
  });

  // See "customization" below.
  const options: UploadWidgetConfig = {
    multi: true
  };

  export default {
    name: "App",
    methods: {
      uploadFile(event: PreventableEvent) {
        openUploadModal({
          event,
          uploader,
          options,
          onComplete: (files: UploadWidgetResult[]) => {
            if (files.length === 0) {
              alert("No files selected.");
            } else {
              alert(files.map(f => f.fileUrl).join("\n"));
            }
          }
        })
      }
    }
  };
</script>
```

### Option 2) Dropzone — [Try on CodePen](https://codepen.io/bytescale/pen/RwJvpKG?editors=1000)

Create a file upload dropzone using the `UploadDropzone` component:

```html
<template>
  <UploadDropzone :uploader="uploader"
                  :options="options"
                  :on-update="onFileUploaded"
                  width="600px"
                  height="375px" />
</template>

<script lang="ts">
import { Uploader } from "uploader";
import { UploadDropzone } from "@upload-io/vue-uploader";
import type { UploadWidgetConfig, UploadWidgetResult } from "uploader";

// One instance per app.
const uploader = Uploader({ apiKey: "free" });

// See "customization" below.
const options: UploadWidgetConfig = {
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
    onFileUploaded(files: UploadWidgetResult[]) {
      if (files.length === 0) {
        alert("No files selected.");
      } else {
        alert(files.map(f => f.fileUrl).join("\n"));
      }
    }
  }
};
</script>
```

## The Result

The callbacks receive a `Array<UploadWidgetResult>`:

```javascript
{
  fileUrl: "https://upcdn.io/FW25...",   // URL to use when serving this file.
  filePath: "/uploads/example.jpg",      // File path (we recommend saving this to your database).

  editedFile: undefined,                 // Edited file (for image crops). Same structure as below.

  originalFile: {
    fileUrl: "https://upcdn.io/FW25...", // Uploaded file URL.
    filePath: "/uploads/example.jpg",    // Uploaded file path (relative to your raw file directory).
    accountId: "FW251aX",                // Bytescale account the file was uploaded to.
    originalFileName: "example.jpg",     // Original file name from the user's machine.
    file: { ... },                       // Original DOM file object from the <input> element.
    size: 12345,                         // File size in bytes.
    lastModified: 1663410542397,         // Epoch timestamp of when the file was uploaded or updated.
    mime: "image/jpeg",                  // File MIME type.
    metadata: {
      ...                                // User-provided JSON object.
    },
    tags: [
      "tag1",                            // User-provided & auto-generated tags.
      "tag2",
      ...
    ]
  }
}
```

# 🌐 API Support

## 🌐 File Management API

Bytescale provides an [Upload API](https://www.bytescale.com/docs/upload-api), which supports the following:

- File uploading.
- File listing.
- File deleting.
- And more...

Uploading a `"Hello World"` text file is as simple as:

```shell
curl --data "Hello World" \
     -u apikey:free \
     -X POST "https://api.bytescale.com/v1/files/basic"
```

_Note: Remember to set `-H "Content-Type: mime/type"` when uploading other file types!_

[Read the Upload API docs »](https://www.bytescale.com/docs/upload-api)

## 🌐 Image Processing API (Resize, Crop, etc.)

Bytescale also provides an [Image Processing API](https://www.bytescale.com/docs/image-processing-api), which supports the following:

- [Image Resizing](https://www.bytescale.com/docs/image-processing-api#image-resizing-api)
- [Image Cropping](https://www.bytescale.com/docs/image-processing-api#image-cropping-api)
- [Image Compression](https://www.bytescale.com/docs/image-processing-api#image-compression-api)
- [Image Conversion](https://www.bytescale.com/docs/image-processing-api#f)
- [Image Manipulation (blur, sharpen, brightness, etc.)](https://www.bytescale.com/docs/image-processing-api#image-manipulation-api)
- [Layering (e.g for text & image watermarks)](https://www.bytescale.com/docs/image-processing-api#image)
- and more...

[Read the Image Processing API docs »](https://www.bytescale.com/docs/image-processing-api)

### Original Image

Here's an example using [a photo of Chicago](https://upcdn.io/W142hJk/raw/example/city-landscape.jpg):

<img src="https://upcdn.io/W142hJk/raw/example/city-landscape.jpg" />

```
https://upcdn.io/W142hJk/raw/example/city-landscape.jpg
```

### Processed Image

Using the [Image Processing API](https://www.bytescale.com/docs/image-processing-api), you can produce [this image](https://upcdn.io/W142hJk/image/example/city-landscape.jpg?w=900&h=600&fit=crop&f=webp&q=80&blur=4&text=WATERMARK&layer-opacity=80&blend=overlay&layer-rotate=315&font-size=100&padding=10&font-weight=900&color=ffffff&repeat=true&text=Chicago&gravity=bottom&padding-x=50&padding-bottom=20&font=/example/fonts/Lobster.ttf&color=ffe400):

<img src="https://upcdn.io/W142hJk/image/example/city-landscape.jpg?w=900&h=600&fit=crop&f=webp&q=80&blur=4&text=WATERMARK&layer-opacity=80&blend=overlay&layer-rotate=315&font-size=100&padding=10&font-weight=900&color=ffffff&repeat=true&text=Chicago&gravity=bottom&padding-x=50&padding-bottom=20&font=/example/fonts/Lobster.ttf&color=ffe400" />

```
https://upcdn.io/W142hJk/image/example/city-landscape.jpg
  ?w=900
  &h=600
  &fit=crop
  &f=webp
  &q=80
  &blur=4
  &text=WATERMARK
  &layer-opacity=80
  &blend=overlay
  &layer-rotate=315
  &font-size=100
  &padding=10
  &font-weight=900
  &color=ffffff
  &repeat=true
  &text=Chicago
  &gravity=bottom
  &padding-x=50
  &padding-bottom=20
  &font=/example/fonts/Lobster.ttf
  &color=ffe400
```

## Full Documentation

[Uploader Documentation »](https://www.bytescale.com/docs/upload-widget)

## Need a Headless (no UI) File Upload Library?

[Try Upload.js »](https://www.bytescale.com/upload-js)

## Can I use my own storage?

**Yes:** Bytescale supports AWS S3, Cloudflare R2, Google Storage, and DigitalOcean Spaces.

To configure a custom storage backend, please see:

[https://www.bytescale.com/docs/storage/sources](https://www.bytescale.com/docs/storage/sources)

## 👋 Create your Bytescale Account

Vue Uploader is the Vue Upload Widget for Bytescale: the best way to serve images, videos, and audio for web apps.

**[Create a Bytescale account »](https://www.bytescale.com/)**

## Building From Source

[BUILD.md](BUILD.md)

## License

[MIT](LICENSE)
