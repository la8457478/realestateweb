<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon details-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6.38,6H17.63L12,16L6.38,6M3,4L12,20L21,4H3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DetailsIcon",
  props: {
    title: {
      type: String,
      default: "Details icon"
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
