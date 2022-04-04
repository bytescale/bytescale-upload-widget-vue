<template>
  <h1>vue-uploader example</h1>
  <button @click="uploadFile">Upload a file...</button>
  <UploadDropzone />
</template>

<script lang="ts">
import { uploadFileMethod } from "@upload-io/vue-uploader/UploadFileMethod";
import { Uploader, UploaderOptions } from "uploader";
import { UploadDropzone } from "@upload-io/vue-uploader";

const uploader = new Uploader({ apiKey: "free" });
const options: UploaderOptions = {
  multi: false
}

export default {
  name: "App",
  components: {
    UploadDropzone
  },
  methods: {
    uploadFile: uploadFileMethod({
      uploader,
      options,
      onComplete: (files) => {
        if (files.length === 0) {
          console.log('No files selected.')
        } else {
          console.log('Files uploaded:');
          console.log(files.map(f => f.fileUrl));
        }
      }
    })
  }
}
</script>
