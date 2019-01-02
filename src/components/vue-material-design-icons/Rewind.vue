<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon rewind-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RewindIcon",
  props: {
    title: {
      type: String,
      default: "Rewind icon"
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
