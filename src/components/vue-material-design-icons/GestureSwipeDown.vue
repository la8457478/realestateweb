<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon gesture-swipe-down-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,9C10,8.45 10.45,8 11,8C11.55,8 12,8.45 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M1,9L4,12L7,9H5V3H3V9H1Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "GestureSwipeDownIcon",
  props: {
    title: {
      type: String,
      default: "Gesture Swipe Down icon"
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
