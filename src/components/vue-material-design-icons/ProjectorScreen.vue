<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon projector-screen-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,2C3.45,2 3,2.45 3,3V4C3,4.55 3.45,5 4,5H5V14H11V16.59L6.79,20.79L8.21,22.21L11,19.41V22H13V19.41L15.79,22.21L17.21,20.79L13,16.59V14H19V5H20C20.55,5 21,4.55 21,4V3C21,2.45 20.55,2 20,2H4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ProjectorScreenIcon",
  props: {
    title: {
      type: String,
      default: "Projector Screen icon"
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
