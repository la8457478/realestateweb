<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon serial-port-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7,3H17V5H19V8H16V14H8V8H5V5H7V3M17,9H19V14H17V9M11,15H13V22H11V15M5,9H7V14H5V9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SerialPortIcon",
  props: {
    title: {
      type: String,
      default: "Serial Port icon"
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
