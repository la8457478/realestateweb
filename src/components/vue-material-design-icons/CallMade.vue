<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon call-made-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,5V7H15.59L4,18.59L5.41,20L17,8.41V15H19V5">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CallMadeIcon",
  props: {
    title: {
      type: String,
      default: "Call Made icon"
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
