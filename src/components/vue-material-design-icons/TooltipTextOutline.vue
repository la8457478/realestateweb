<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon tooltip-text-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,2H20C21.1,2 22,2.9 22,4V16C22,17.1 21.1,18 20,18H16L12,22L8,18H4C2.9,18 2,17.1 2,16V4C2,2.9 2.9,2 4,2M4,4V16H8.83L12,19.17L15.17,16H20V4H4M6,7H18V9H6V7M6,11H16V13H6V11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TooltipTextOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Tooltip Text Outline icon"
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
