<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon eight-track-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7,2L5,5V16L6,20C6.27,21.07 6.9,22 8,22H16C17.1,22 18,21.1 18,20L19,16V5L17,2H15V3H13V2H7M7,6H17V16H7V6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "EightTrackIcon",
  props: {
    title: {
      type: String,
      default: "Eight Track icon"
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
