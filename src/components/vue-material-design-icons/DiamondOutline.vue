<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon diamond-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M18,2H6L2,8L12,22L22,8L18,2M4.43,8L7.07,4H16.93L19.57,8L12,18.56L4.43,8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DiamondOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Diamond Outline icon"
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
