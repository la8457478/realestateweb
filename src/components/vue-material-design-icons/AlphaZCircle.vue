<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-z-circle-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7V9H13L9,15V17H15V15H11L15,9V7H9M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaZCircleIcon",
  props: {
    title: {
      type: String,
      default: "Alpha Z Circle icon"
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
