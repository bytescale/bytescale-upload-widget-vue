<template>
  <h1>vue-uploader example</h1>
  <button id="uploadButton" @click="uploadFile">Upload a file...</button>
  <div id="dropzone">
    <UploadDropzone :uploader="uploader" :options="options" :on-update="onDropzoneUpdate" />
  </div>
</template>

<script lang="ts">
import { openUploader } from "@upload-io/vue-uploader/OpenUploader";
import { PreventableEvent } from "@upload-io/vue-uploader/PreventableEvent";
import UploadDropzone from "@upload-io/vue-uploader/UploadDropzone.vue";
import { Uploader, UploaderOptions, UploaderResult } from "uploader";

const uploader = Uploader({ apiKey: "free" });
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
    uploadFile(event: PreventableEvent) {
      openUploader({
        event,
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
      })
    },
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
