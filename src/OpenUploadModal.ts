import { UploaderInterface, UploadWidgetConfig, UploadWidgetResult } from "uploader";
import { PreventableEvent } from "@upload-io/vue-uploader/PreventableEvent";

export function openUploadModal({
  event,
  uploader,
  options,
  onComplete
}: {
  event?: PreventableEvent;
  onComplete?: (files: UploadWidgetResult[]) => void;
  options?: UploadWidgetConfig;
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
