<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon solid-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M0,0H24V24H0">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SolidIcon",
  props: {
    title: {
      type: String,
      default: "Solid icon"
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
