<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pipe-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M22,14H20V16H14V13H16V11H14V6C14,4.9 13.1,4 12,4H4V2H2V10H4V8H10V11H8V13H10V18C10,19.1 10.9,20 12,20H20V22H22">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PipeIcon",
  props: {
    title: {
      type: String,
      default: "Pipe icon"
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
