<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon arrow-bottom-right-thick-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14.89,12.06V7.11H18.31V18.31H7.11V14.89H12.06L5.69,8.5L8.5,5.69L14.89,12.06Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArrowBottomRightThickIcon",
  props: {
    title: {
      type: String,
      default: "Arrow Bottom Right Thick icon"
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
