import processErrorInfo  from "./utils/processErrorInfo";
export default class MoonWatch {
  init() {
    // @ts-ignore
    window.addEventListener('error', (msg, url, row, col, error) => {
      processErrorInfo(msg, url, row, col, error);
    });
  }
}
