<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon polaroid-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,3H18C19.1,3 20,3.9 20,5V19C20,20.1 19.1,21 18,21H6C4.9,21 4,20.1 4,19V5C4,3.9 4.9,3 6,3M6,5V17H18V5H6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PolaroidIcon",
  props: {
    title: {
      type: String,
      default: "Polaroid icon"
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
