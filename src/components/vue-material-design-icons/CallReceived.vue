<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon call-received-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,5.41L18.59,4L7,15.59V9H5V19H15V17H8.41">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CallReceivedIcon",
  props: {
    title: {
      type: String,
      default: "Call Received icon"
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
