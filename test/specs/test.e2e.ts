/* eslint-disable @typescript-eslint/no-floating-promises */
import App from "../pageobjects/app.page";

describe("@bytescale/upload-widget-angular sandbox", () => {
  it("should contain a dropzone component", async () => {
    await App.open();
    const button = App.dropzoneUploadButton;
    const buttonText = await button.getText();
    expect(buttonText).toBe("Upload a File");
  });
  it("should contain a file upload button", async () => {
    await App.open();
    await App.modalLauncher.click();
    const button = App.modalButton;
    await button.waitForClickable();
    const buttonText = await button.getText();
    expect(buttonText).toBe("Upload a File");
  });
});
