<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon azure-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13.05,4.24L6.56,18.05L2,18L7.09,9.24L13.05,4.24M13.75,5.33L22,19.76H6.74L16.04,18.1L11.17,12.31L13.75,5.33Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AzureIcon",
  props: {
    title: {
      type: String,
      default: "Azure icon"
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
