<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon cellphone-android-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17.25,18H6.75V4H17.25M14,21H10V20H14M16,1H8C6.34,1 5,2.34 5,4V20C5,21.66 6.34,23 8,23H16C17.66,23 19,21.66 19,20V4C19,2.34 17.66,1 16,1Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CellphoneAndroidIcon",
  props: {
    title: {
      type: String,
      default: "Cellphone Android icon"
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
