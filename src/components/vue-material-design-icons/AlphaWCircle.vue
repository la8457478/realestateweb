<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-w-circle-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,17H15C16.1,17 17,16.1 17,15V7H15V15H13V8H11V15H9V7H7V15C7,16.1 7.9,17 9,17M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaWCircleIcon",
  props: {
    title: {
      type: String,
      default: "Alpha W Circle icon"
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
