/**
 * If the page is tries to close with the contents of the form control changed, a confirm dialog is displayed to prevent the changes from being discarded.
 *
 * @version 1.0.0
 */
export default class {
	#submitForm = false; // フォームが送信されたか
	#changeCtrl = false; // フォームコントロールが変更されたか

	/**
	 * @param {HTMLFormElement} thisElement - Target element
	 */
	constructor(thisElement: HTMLFormElement) {
		for (const formCtrlElement of thisElement.elements) {
			formCtrlElement.addEventListener('change', this._formCtrlChangeEvent.bind(this), { once: true, passive: true });
		}

		thisElement.addEventListener('submit', this._submitEvent.bind(this), { once: true, passive: true });

		window.addEventListener('beforeunload', this._windowBeforeUnloadEvent.bind(this));
	}

	/**
	 * フォームコントロールの内容が変更されたときの処理
	 */
	private _formCtrlChangeEvent(): void {
		this.#changeCtrl = true;
	}

	/**
	 * フォームが送信されたときの処理
	 */
	private _submitEvent(): void {
		this.#submitForm = true;
	}

	/**
	 * window - beforeunload の処理
	 *
	 * @param {BeforeUnloadEvent} ev - Event
	 */
	private _windowBeforeUnloadEvent(ev: BeforeUnloadEvent): void {
		if (!this.#submitForm && this.#changeCtrl) {
			ev.preventDefault();
			ev.returnValue = ''; // for Chrome https://bugs.chromium.org/p/chromium/issues/detail?id=866818
		}
	}
}
