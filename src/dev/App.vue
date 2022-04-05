<template>
  <h1>vue-uploader example</h1>
  <button id="uploadButton" @click="uploadFile">Upload a file...</button>
  <div id="dropzone">
    <UploadDropzone :uploader="uploader" :options="options" :on-update="onDropzoneUpdate" />
  </div>
</template>

<script lang="ts">
import { uploadFileMethod } from "@upload-io/vue-uploader/UploadFileMethod";
import { Uploader, UploaderOptions, UploaderResult } from "uploader";
import UploadDropzone from "@upload-io/vue-uploader/UploadDropzone.vue";

const uploader = new Uploader({ apiKey: "free" });
const options: UploaderOptions = {
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
    uploadFile: uploadFileMethod({
      uploader,
      options,
      onComplete: (files: UploaderResult[]): void => {
        if (files.length === 0) {
          console.log("No files selected.");
        } else {
          console.log("Files uploaded:");
          console.log(files.map(f => f.fileUrl));
        }
      }
    }),
    onDropzoneUpdate: (files: UploaderResult[]): void => {
      if (files.length === 0) {
        console.log("No files selected in dropzone.");
      } else {
        console.log("Files uploaded in dropzone:");
        console.log(files.map(f => f.fileUrl));
      }
    }
  }
};
</script>
