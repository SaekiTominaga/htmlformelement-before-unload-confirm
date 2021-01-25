/**
 * If the page is tries to close with the contents of the form control changed, a confirm dialog is displayed to prevent the changes from being discarded.
 */
export default class {
	#thisElement: HTMLFormElement; // 対象要素

	#submitForm = false; // フォームが送信されたか
	#changeControl = false; // フォームコントロールが変更されたか

	#formControlChangeEventListener: () => void;
	#submitEventListener: () => void;
	#windowBeforeUnloadEventListener: (ev: BeforeUnloadEvent) => void;

	/**
	 * @param {HTMLFormElement} thisElement - Target element
	 */
	constructor(thisElement: HTMLFormElement) {
		this.#thisElement = thisElement;

		this.#formControlChangeEventListener = this._formControlChangeEvent.bind(this);
		this.#submitEventListener = this._submitEvent.bind(this);
		this.#windowBeforeUnloadEventListener = this._windowBeforeUnloadEvent.bind(this);
	}

	/**
	 * Initial processing
	 */
	init(): void {
		for (const formControlElement of this.#thisElement.elements) {
			formControlElement.addEventListener('change', this.#formControlChangeEventListener, { once: true, passive: true });
		}

		this.#thisElement.addEventListener('submit', this.#submitEventListener, { once: true, passive: true });
		window.addEventListener('beforeunload', this.#windowBeforeUnloadEventListener);
	}

	/**
	 * フォームコントロールの内容が変更されたときの処理
	 */
	private _formControlChangeEvent(): void {
		this.#changeControl = true;
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
		if (!this.#submitForm && this.#changeControl) {
			ev.preventDefault();
			ev.returnValue = ''; // for Chrome https://bugs.chromium.org/p/chromium/issues/detail?id=866818
		}
	}
}
