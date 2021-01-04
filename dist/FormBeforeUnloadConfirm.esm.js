var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _submitForm, _changeCtrl;
/**
 * If the page is tries to close with the contents of the form control changed, a confirm dialog is displayed to prevent the changes from being discarded.
 *
 * @version 1.0.0
 */
export default class {
    /**
     * @param {HTMLFormElement} thisElement - Target element
     */
    constructor(thisElement) {
        _submitForm.set(this, false); // フォームが送信されたか
        _changeCtrl.set(this, false); // フォームコントロールが変更されたか
        for (const formCtrlElement of thisElement.elements) {
            formCtrlElement.addEventListener('change', this._formCtrlChangeEvent.bind(this), { once: true, passive: true });
        }
        thisElement.addEventListener('submit', this._submitEvent.bind(this), { once: true, passive: true });
        window.addEventListener('beforeunload', this._windowBeforeUnloadEvent.bind(this));
    }
    /**
     * フォームコントロールの内容が変更されたときの処理
     */
    _formCtrlChangeEvent() {
        __classPrivateFieldSet(this, _changeCtrl, true);
    }
    /**
     * フォームが送信されたときの処理
     */
    _submitEvent() {
        __classPrivateFieldSet(this, _submitForm, true);
    }
    /**
     * window - beforeunload の処理
     *
     * @param {BeforeUnloadEvent} ev - Event
     */
    _windowBeforeUnloadEvent(ev) {
        if (!__classPrivateFieldGet(this, _submitForm) && __classPrivateFieldGet(this, _changeCtrl)) {
            ev.preventDefault();
            ev.returnValue = ''; // for Chrome https://bugs.chromium.org/p/chromium/issues/detail?id=866818
        }
    }
}
_submitForm = new WeakMap(), _changeCtrl = new WeakMap();
