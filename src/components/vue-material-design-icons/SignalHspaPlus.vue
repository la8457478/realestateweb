<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon signal-hspa-plus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,8V11H22V14H19V17H16V14H13V11H16V8H19M5,10.5H8V4.5H11V19.5H8V13.5H5V19.5H2V4.5H5V10.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SignalHspaPlusIcon",
  props: {
    title: {
      type: String,
      default: "Signal Hspa Plus icon"
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
