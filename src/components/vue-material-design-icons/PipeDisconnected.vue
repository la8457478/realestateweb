<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pipe-disconnected-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M16,9V11H8V9H10V8H4V10H2V2H4V4H12C13.1,4 14,4.9 14,6V9H16M10,15V18C10,19.1 10.9,20 12,20H20V22H22V14H20V16H14V15H16V13H8V15H10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PipeDisconnectedIcon",
  props: {
    title: {
      type: String,
      default: "Pipe Disconnected icon"
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
