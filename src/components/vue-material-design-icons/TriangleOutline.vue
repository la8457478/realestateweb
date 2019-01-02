<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon triangle-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,2L1,21H23M12,6L19.53,19H4.47">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TriangleOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Triangle Outline icon"
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
