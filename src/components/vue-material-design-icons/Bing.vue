<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon bing-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,3V19L8.72,21L18,15.82V11.73H18L9.77,8.95L11.38,12.84L13.94,14L8.7,16.92V4.27L5,3">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BingIcon",
  props: {
    title: {
      type: String,
      default: "Bing icon"
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
