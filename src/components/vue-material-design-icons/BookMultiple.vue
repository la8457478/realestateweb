<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon book-multiple-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,18H9C7.9,18 7,17.1 7,16V4C7,2.9 7.9,2 9,2H10V7L12,5.5L14,7V2H19C20.1,2 21,2.9 21,4V16C21,17.1 20.1,18 19,18M17,20V22H5C3.9,22 3,21.1 3,20V6H5V20H17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BookMultipleIcon",
  props: {
    title: {
      type: String,
      default: "Book Multiple icon"
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
