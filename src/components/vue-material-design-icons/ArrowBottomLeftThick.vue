<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon arrow-bottom-left-thick-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15.5,5.69L18.31,8.5L11.94,14.89H16.89V18.31H5.69V7.11H9.12V12.06L15.5,5.69Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArrowBottomLeftThickIcon",
  props: {
    title: {
      type: String,
      default: "Arrow Bottom Left Thick icon"
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
