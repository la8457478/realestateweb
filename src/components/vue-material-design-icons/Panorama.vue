<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon panorama-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M8.5,12.5L11,15.5L14.5,11L19,17H5M23,18V6C23,4.9 22.1,4 21,4H3C1.9,4 1,4.9 1,6V18C1,19.1 1.9,20 3,20H21C22.1,20 23,19.1 23,18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PanoramaIcon",
  props: {
    title: {
      type: String,
      default: "Panorama icon"
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
