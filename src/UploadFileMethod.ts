import { Uploader, UploaderOptions, UploaderResult } from "uploader";

export function uploadFileMethod({
  uploader,
  options,
  onComplete
}: {
  onComplete?: (files: UploaderResult[]) => void;
  options?: UploaderOptions;
  uploader: Uploader;
}): (event: { preventDefault: () => void }) => void {
  return e => {
    e.preventDefault();
    uploader.open(options).then(
      files => {
        if (onComplete !== undefined) {
          onComplete(files);
        }
      },
      error => console.error("Uploader error.", error)
    );
  };
}
