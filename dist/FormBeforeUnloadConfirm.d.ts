/**
 * If the page is tries to close with the contents of the form control changed, a confirm dialog is displayed to prevent the changes from being discarded.
 */
export default class {
    #private;
    /**
     * @param {HTMLFormElement} thisElement - Target element
     */
    constructor(thisElement: HTMLFormElement);
    /**
     * Initial processing
     */
    init(): void;
    /**
     * フォームコントロールの内容が変更されたときの処理
     */
    private _formControlChangeEvent;
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
//# sourceMappingURL=FormBeforeUnloadConfirm.d.ts.map