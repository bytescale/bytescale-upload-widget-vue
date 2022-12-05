import { UploaderInterface, UploaderOptions, UploaderResult } from "uploader";
import { PreventableEvent } from "@upload-io/vue-uploader/PreventableEvent";

export function openUploader({
  event,
  uploader,
  options,
  onComplete
}: {
  event?: PreventableEvent;
  onComplete?: (files: UploaderResult[]) => void;
  options?: UploaderOptions;
  uploader: UploaderInterface;
}): void {
  if (event !== undefined) {
    event.preventDefault();
  }
  uploader.open(options).then(
    files => {
      if (onComplete !== undefined) {
        onComplete(files);
      }
    },
    error => console.error("Uploader error.", error)
  );
}
