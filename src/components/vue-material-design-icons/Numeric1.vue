<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon numeric1-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,7V9H12V17H14V7H10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Numeric1Icon",
  props: {
    title: {
      type: String,
      default: "Numeric1 icon"
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
