<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon television-guide-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21,17V5H3V17H21M21,3C22.1,3 23,3.9 23,5V17C23,18.1 22.1,19 21,19H16V21H8V19H3C1.9,19 1,18.1 1,17V5C1,3.9 1.9,3 3,3H21M5,7H11V11H5V7M5,13H11V15H5V13M13,7H19V9H13V7M13,11H19V15H13V11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TelevisionGuideIcon",
  props: {
    title: {
      type: String,
      default: "Television Guide icon"
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
