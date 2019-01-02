<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon signal-cellular3-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21,4H16V20H21V4M14,9H9V20H14V9M7,14H2V20H7V14Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SignalCellular3Icon",
  props: {
    title: {
      type: String,
      default: "Signal Cellular3 icon"
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
