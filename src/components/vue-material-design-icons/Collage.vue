<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon collage-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H11V3M13,3V11H21V5C21,3.89 20.11,3 19,3M13,13V21H19C20.11,21 21,20.11 21,19V13">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CollageIcon",
  props: {
    title: {
      type: String,
      default: "Collage icon"
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
