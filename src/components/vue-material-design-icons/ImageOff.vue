<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon image-off-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2.28,3L1,4.27L3,6.27V19C3,20.1 3.9,21 5,21H17.73L19.73,23L21,21.72L2.28,3M4.83,3L21,19.17V5C21,3.89 20.1,3 19,3H4.83M8.5,13.5L11,16.5L12,15.25L14.73,18H5L8.5,13.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ImageOffIcon",
  props: {
    title: {
      type: String,
      default: "Image Off icon"
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
