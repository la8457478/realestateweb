<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon diamond-stone-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M16,9H19L14,16M10,9H14L12,17M5,9H8L10,16M15,4H17L19,7H16M11,4H13L14,7H10M7,4H9L8,7H5M6,2L2,8L12,22L22,8L18,2H6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DiamondStoneIcon",
  props: {
    title: {
      type: String,
      default: "Diamond Stone icon"
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
