<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon share-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14,4V8C7,9 4,14 3,19C5.5,15.5 9,13.9 14,13.9V18L21,11L14,4M16,8.83L18.17,11L16,13.17V11.9H14C11.93,11.9 10.07,12.28 8.34,12.85C9.74,11.46 11.54,10.37 14.28,10L16,9.73V8.83Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ShareOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Share Outline icon"
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
