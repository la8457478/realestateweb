<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon book-multiple-minus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,2C7.9,2 7,2.9 7,4V16C7,17.1 7.9,18 9,18H19C20.1,18 21,17.1 21,16V4C21,2.9 20.1,2 19,2H14V7L12,5.5L10,7V2H9M3,6V20C3,21.1 3.9,22 5,22H17V20H5V6H3M19,12V14C19,14 18.26,14 13,14V12H19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BookMultipleMinusIcon",
  props: {
    title: {
      type: String,
      default: "Book Multiple Minus icon"
    },
    decorative: {
      type: Boolean,
      default: false
    },
    fillColor: {
      type: String,
      default: "currentColor"
    }
  }
}
</script>
