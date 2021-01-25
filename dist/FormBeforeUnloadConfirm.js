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
var _thisElement, _submitForm, _changeControl, _formControlChangeEventListener, _submitEventListener, _windowBeforeUnloadEventListener;
/**
 * If the page is tries to close with the contents of the form control changed, a confirm dialog is displayed to prevent the changes from being discarded.
 */
export default class {
    /**
     * @param {HTMLFormElement} thisElement - Target element
     */
    constructor(thisElement) {
        _thisElement.set(this, void 0); // 対象要素
        _submitForm.set(this, false); // フォームが送信されたか
        _changeControl.set(this, false); // フォームコントロールが変更されたか
        _formControlChangeEventListener.set(this, void 0);
        _submitEventListener.set(this, void 0);
        _windowBeforeUnloadEventListener.set(this, void 0);
        __classPrivateFieldSet(this, _thisElement, thisElement);
        __classPrivateFieldSet(this, _formControlChangeEventListener, this._formControlChangeEvent.bind(this));
        __classPrivateFieldSet(this, _submitEventListener, this._submitEvent.bind(this));
        __classPrivateFieldSet(this, _windowBeforeUnloadEventListener, this._windowBeforeUnloadEvent.bind(this));
    }
    /**
     * Initial processing
     */
    init() {
        for (const formControlElement of __classPrivateFieldGet(this, _thisElement).elements) {
            formControlElement.addEventListener('change', __classPrivateFieldGet(this, _formControlChangeEventListener), { once: true, passive: true });
        }
        __classPrivateFieldGet(this, _thisElement).addEventListener('submit', __classPrivateFieldGet(this, _submitEventListener), { once: true, passive: true });
        window.addEventListener('beforeunload', __classPrivateFieldGet(this, _windowBeforeUnloadEventListener));
    }
    /**
     * フォームコントロールの内容が変更されたときの処理
     */
    _formControlChangeEvent() {
        __classPrivateFieldSet(this, _changeControl, true);
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
        if (!__classPrivateFieldGet(this, _submitForm) && __classPrivateFieldGet(this, _changeControl)) {
            ev.preventDefault();
            ev.returnValue = ''; // for Chrome https://bugs.chromium.org/p/chromium/issues/detail?id=866818
        }
    }
}
_thisElement = new WeakMap(), _submitForm = new WeakMap(), _changeControl = new WeakMap(), _formControlChangeEventListener = new WeakMap(), _submitEventListener = new WeakMap(), _windowBeforeUnloadEventListener = new WeakMap();
//# sourceMappingURL=FormBeforeUnloadConfirm.js.map