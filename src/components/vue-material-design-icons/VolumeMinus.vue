<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon volume-minus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,9H7L12,4V20L7,15H3V9M14,11H22V13H14V11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "VolumeMinusIcon",
  props: {
    title: {
      type: String,
      default: "Volume Minus icon"
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
