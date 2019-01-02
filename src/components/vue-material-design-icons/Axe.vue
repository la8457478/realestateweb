<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon axe-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,2L22,8C22,12 20,14 16,15L13,10L9,6L12,2M4.11,19.84L2.12,18.33L9.19,9L11,10.81L4.11,19.84Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AxeIcon",
  props: {
    title: {
      type: String,
      default: "Axe icon"
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
