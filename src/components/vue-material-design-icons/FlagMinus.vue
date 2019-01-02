<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon flag-minus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12.4,5H18V15H11L10.6,13H5V20H3V3H12L12.4,5M14,17H22V19H14V17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FlagMinusIcon",
  props: {
    title: {
      type: String,
      default: "Flag Minus icon"
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
