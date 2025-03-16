
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "showBox") {
      showFloatingBox();
      // Always send a response, even if it's just an acknowledgement
      sendResponse({status: "success"});
      return true; // Indicates you wish to send a response asynchronously
    }
  });
  
  function showFloatingBox() {
      // Check if the box already exists
      if (document.getElementById('floating-box')) return;
    
      // Create the div element
      const box = document.createElement('div');
      box.id = 'floating-box';
    
      // Apply styles to the box
      box.style.position = 'fixed';
      box.style.bottom = '25px';
      box.style.right = '20px';
      box.style.color = '#fff';
      box.style.textAlign = 'center';
      box.style.borderRadius = '8px';
      box.style.zIndex = '9999';
  
    
      const shadow = box.attachShadow({ mode: "open" });
      shadow.innerHTML = `
      <style>

      @font-face {
    font-family: 'Oswald';
    src: url('fonts/Oswald-Regular.ttf') format('truetype');
    font-weight: 100 900; /* Variable weight range */
    font-style: normal;
}
      /*! tailwindcss v4.0.14 | MIT License | https://tailwindcss.com */
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-red-500: oklch(0.637 0.237 25.331);
    --color-amber-300: oklch(0.879 0.169 91.605);
    --color-amber-500: oklch(0.769 0.188 70.08);
    --color-amber-600: oklch(0.666 0.179 58.318);
    --color-blue-500: oklch(0.623 0.214 259.815);
    --color-blue-600: oklch(0.546 0.245 262.881);
    --color-slate-800: oklch(0.279 0.041 260.031);
    --color-slate-900: oklch(0.208 0.042 265.755);
    --color-gray-100: oklch(0.967 0.003 264.542);
    --color-gray-900: oklch(0.21 0.034 264.665);
    --color-white: #fff;
    --spacing: 0.25rem;
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --font-weight-bold: 700;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
    --default-font-feature-settings: var(--font-sans--font-feature-settings);
    --default-font-variation-settings: var(
      --font-sans--font-variation-settings
    );
    --default-mono-font-family: var(--font-mono);
    --default-mono-font-feature-settings: var(
      --font-mono--font-feature-settings
    );
    --default-mono-font-variation-settings: var(
      --font-mono--font-variation-settings
    );
    --font-oswald: "Oswald", sans-serif;
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var( --default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" );
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var( --default-font-variation-settings, normal );
    -webkit-tap-highlight-color: transparent;
  }
  body {
    line-height: inherit;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var( --default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace );
    font-feature-settings: var( --default-mono-font-feature-settings, normal );
    font-variation-settings: var( --default-mono-font-variation-settings, normal );
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
    color: color-mix(in oklab, currentColor 50%, transparent);
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .container {
    width: 100%;
    @media (width >= 40rem) {
      max-width: 40rem;
    }
    @media (width >= 48rem) {
      max-width: 48rem;
    }
    @media (width >= 64rem) {
      max-width: 64rem;
    }
    @media (width >= 80rem) {
      max-width: 80rem;
    }
    @media (width >= 96rem) {
      max-width: 96rem;
    }
  }
  .m-1 {
    margin: calc(var(--spacing) * 1);
  }
  .m-5 {
    margin: calc(var(--spacing) * 5);
  }
  .m-10 {
    margin: calc(var(--spacing) * 10);
  }
  .my-1 {
    margin-block: calc(var(--spacing) * 1);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .table {
    display: table;
  }
  .h-24 {
    height: calc(var(--spacing) * 24);
  }
  .h-40 {
    height: calc(var(--spacing) * 40);
  }
  .h-48 {
    height: calc(var(--spacing) * 48);
  }
  .h-80 {
    height: calc(var(--spacing) * 80);
  }
  .h-300 {
    height: calc(var(--spacing) * 300);
  }
  .h-fit {
    height: fit-content;
  }
  .h-full {
    height: 100%;
  }
  .h-max {
    height: max-content;
  }
  .h-min {
    height: min-content;
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\/3 {
    width: calc(1/3 * 100%);
  }
  .w-1\/4 {
    width: calc(1/4 * 100%);
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-2\/5 {
    width: calc(2/5 * 100%);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-96 {
    width: calc(var(--spacing) * 96);
  }
  .w-\[600px\] {
    width: 600px;
  }
  .w-full {
    width: 100%;
  }
  .flex-1 {
    flex: 1;
  }
  .flex-none {
    flex: none;
  }
  .flex-grow {
    flex-grow: 1;
  }
  .border-collapse {
    border-collapse: collapse;
  }
  .transform {
    transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .resize {
    resize: both;
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .gap-5 {
    gap: calc(var(--spacing) * 5);
  }
  .space-x-2 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .space-x-3 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .bg-amber-500 {
    background-color: var(--color-amber-500);
  }
  .bg-blue-500 {
    background-color: var(--color-blue-500);
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-slate-800 {
    background-color: var(--color-slate-800);
  }
  .bg-slate-900 {
    background-color: var(--color-slate-900);
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .fill-white {
    fill: var(--color-white);
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .font-oswald {
    font-family: var(--font-oswald);
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .text-amber-300 {
    color: var(--color-amber-300);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-slate-900 {
    color: var(--color-slate-900);
  }
  .text-white {
    color: var(--color-white);
  }
  .underline {
    text-decoration-line: underline;
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }
  .hover\:bg-amber-600 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-amber-600);
      }
    }
  }
  .hover\:bg-blue-600 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-600);
      }
    }
  }
  .hover\:text-red-500 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-red-500);
      }
    }
  }
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
  initial-value: rotateX(0);
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
  initial-value: rotateY(0);
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
  initial-value: rotateZ(0);
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
  initial-value: skewX(0);
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
  initial-value: skewY(0);
}
@property --tw-space-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}

      </style>
       <div style="width: 580px; background-color:#4d6bfd;" class="h-48 rounded-xl flex p-3 space-x-3">
        <div class="flex-none flex flex-col w-1/4">
            <div>
            </div>
            <div class="flex flex-col bg-white rounded-lg h-full w-full mt-2 p-1">
                <textarea id="textContrants" class="w-full h-full text-slate-900 bg-white outline-none" placeholder="Enter contract details here..."></textarea>
                <button id="addcontrant" class="font-oswald w-full cursor-pointer text-sm bg-amber-500 hover:bg-amber-600 rounded text-white p-1 relative bottom-0 right-0">Submit</button>
            </div>
        </div>
        <div class="flex-1 flex flex-col">
            <div>
                <h3 style="font-weight:bold;" class="text-white text-lg font-oswald">Prompt</h3>
            </div>
            <div class="flex flex-col bg-white rounded-lg h-full w-full mt-2 p-1">
                <textarea id="textPrompt" class="w-full h-full text-slate-900" placeholder="Type your message here..."></textarea>
                <button id="addtext" class="font-oswald w-full cursor-pointer text-sm bg-blue-500 hover:bg-blue-600 rounded text-white p-1 relative bottom-0 right-0">Send</button>
            </div>
        </div>
    </div>
      `;
      if(document.querySelector('.cbcaa82c')){
        document.querySelector('.cbcaa82c').style.alignItems = 'start';
      }

      let contrantsText='';

      shadow.querySelector('#addcontrant').addEventListener('click', function() {
        contrantsText = shadow.querySelector('#textContrants').value; // Correction ici
        console.log(contrantsText)
      });
    
      document.body.appendChild(box);
      shadow.querySelector('#addtext').addEventListener('click', function() {
        const promptText = shadow.querySelector('#textPrompt').value;
        console.log(promptText);
        //const textareaElement = document.getElementById('prompt-textarea').firstChild;
        const textareaElement = document.getElementById('chat-input');

        if (textareaElement) {
          //textareaElement.innerText = contrantsText+' '+promptText;
          textareaElement.value = contrantsText+' '+promptText;
          const inputEvent = new Event('input', { bubbles: true });
          textareaElement.dispatchEvent(inputEvent);
        } else {
          console.log("Couldn't find the textarea element");
        }
        setTimeout(() => {
          document.querySelector('[role="button"][aria-disabled="false"]').click();
        }, 100); 
        setTimeout(() => {
          document.querySelector('.cbcaa82c').style.alignItems = 'start';
        }, 2000); 
      });

   
  }
    
  // In your content.js file, modify the event listener for the addtext button:



 