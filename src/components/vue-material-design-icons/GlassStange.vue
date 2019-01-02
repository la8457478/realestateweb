<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon glass-stange-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M8,2H16V22H8V2M10,4V7H14V4H10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "GlassStangeIcon",
  props: {
    title: {
      type: String,
      default: "Glass Stange icon"
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
