<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-u-circle-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7V15C9,16.1 9.9,17 11,17H13C14.1,17 15,16.1 15,15V7H13V15H11V7H9M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaUCircleIcon",
  props: {
    title: {
      type: String,
      default: "Alpha U Circle icon"
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
