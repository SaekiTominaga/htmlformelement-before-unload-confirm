# Show confirmation dialog message when page is tries to close while filling out a form.

[![npm version](https://badge.fury.io/js/%40saekitominaga%2Fhtmlformelement-before-unload-confirm.svg)](https://badge.fury.io/js/%40saekitominaga%2Fhtmlformelement-before-unload-confirm)

If the page is tries to close with the contents of the form control changed, a confirm dialog is displayed to prevent the changes from being discarded.

## Demo

- [Demo page](https://saekitominaga.github.io/htmlformelement-before-unload-confirm/demo.html)

## Examples

```HTML
<script type="module">
import FormBeforeUnloadConfirm from './dist/FormBeforeUnloadConfirm.esm.js';

for (const formElement of document.querySelectorAll('.js-form-beforeunload-confirm')) {
  const formBeforeUnloadConfirm = new FormBeforeUnloadConfirm(formElement);
  formBeforeUnloadConfirm.init();
}
</script>

<form class="js-form-beforeunload-confirm">
  <p><input /></p>
  <p><button>Submit</button></p>
</form>
```

## Constructor

```TypeScript
new FormBeforeUnloadConfirm(
  thisElement: HTMLFormElement
)
```

### Parameters

<dl>
<dt>thisElement [required]</dt>
<dd>Target element</dd>
</dl>
