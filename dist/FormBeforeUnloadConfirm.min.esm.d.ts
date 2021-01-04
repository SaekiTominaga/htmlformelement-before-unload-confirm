/**
 * If the page is tries to close with the contents of the form control changed, a confirm dialog is displayed to prevent the changes from being discarded.
 *
 * @version 1.0.0
 */
export default class {
    #private;
    /**
     * @param {HTMLFormElement} thisElement - Target element
     */
    constructor(thisElement: HTMLFormElement);
    /**
     * フォームコントロールの内容が変更されたときの処理
     */
    private _formCtrlChangeEvent;
    /**
     * フォームが送信されたときの処理
     */
    private _submitEvent;
    /**
     * window - beforeunload の処理
     *
     * @param {BeforeUnloadEvent} ev - Event
     */
    private _windowBeforeUnloadEvent;
}
//# sourceMappingURL=FormBeforeUnloadConfirm.esm.d.ts.map