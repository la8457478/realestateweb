<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon tablet-android-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19.25,19H4.75V3H19.25M14,22H10V21H14M18,0H6C4.34,0 3,1.34 3,3V21C3,22.66 4.34,24 6,24H18C19.66,24 21,22.66 21,21V3C21,1.34 19.66,0 18,0Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TabletAndroidIcon",
  props: {
    title: {
      type: String,
      default: "Tablet Android icon"
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
