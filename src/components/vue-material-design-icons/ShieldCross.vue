<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon shield-cross-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,1L3,5V11C3,16.5 6.8,21.7 12,23C17.2,21.7 21,16.5 21,11V5L12,1M16,10H13V18H11V10H8V8H11V5H13V8H16V10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ShieldCrossIcon",
  props: {
    title: {
      type: String,
      default: "Shield Cross icon"
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
