<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon audiobook-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M18,22H6C4.9,22 4,21.1 4,20V4C4,2.89 4.9,2 6,2H7V9L9.5,7.5L12,9V2H18C19.1,2 20,2.9 20,4V20C20,21.1 19.1,22 18,22M13,15C11.9,15 11,15.9 11,17C11,18.1 11.9,19 13,19C14.1,19 15,18.1 15,17V12H18V10H14V15.27C13.71,15.1 13.36,15 13,15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AudiobookIcon",
  props: {
    title: {
      type: String,
      default: "Audiobook icon"
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
