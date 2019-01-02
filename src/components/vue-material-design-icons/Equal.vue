<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon equal-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,10H5V8H19V10M19,16H5V14H19V16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "EqualIcon",
  props: {
    title: {
      type: String,
      default: "Equal icon"
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
