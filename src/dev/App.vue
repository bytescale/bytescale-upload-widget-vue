<template>
  <h1>vue-uploader example</h1>
  <button id="uploadButton" @click="uploadFile">Upload a file...</button>
  <div id="dropzone">
    <UploadDropzone :uploader="uploader" :options="options" :on-update="onDropzoneUpdate" />
  </div>
</template>

<script lang="ts">
import { openUploadModal } from "@upload-io/vue-uploader/OpenUploadModal";
import { PreventableEvent } from "@upload-io/vue-uploader/PreventableEvent";
import UploadDropzone from "@upload-io/vue-uploader/UploadDropzone.vue";
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from "uploader";

const uploader = Uploader({ apiKey: "free" });
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
    uploadFile(event: PreventableEvent) {
      openUploadModal({
        event,
        uploader,
        options,
        onComplete: (files: UploadWidgetResult[]): void => {
          if (files.length === 0) {
            console.log("No files selected.");
          } else {
            console.log("Files uploaded:");
            console.log(files.map(f => f.fileUrl));
          }
        }
      })
    },
    onDropzoneUpdate: (files: UploadWidgetResult[]): void => {
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
