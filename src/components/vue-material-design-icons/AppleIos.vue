<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon apple-ios-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,9V7H16C14.9,7 14,7.9 14,9V11C14,12.1 14.9,13 16,13H18V15H14V17H18C19.1,17 20,16.1 20,15V13C20,11.9 19.1,11 18,11H16V9M11,15H9V9H11M11,7H9C7.9,7 7,7.9 7,9V15C7,16.1 7.9,17 9,17H11C12.1,17 13,16.1 13,15V9C13,7.9 12.1,7 11,7M4,17H6V11H4M4,9H6V7H4V9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AppleIosIcon",
  props: {
    title: {
      type: String,
      default: "Apple Ios icon"
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
