<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon cards-diamond-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,12L12,22L5,12L12,2">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CardsDiamondIcon",
  props: {
    title: {
      type: String,
      default: "Cards Diamond icon"
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
