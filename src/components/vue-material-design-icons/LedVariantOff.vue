<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon led-variant-off-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,3C10.05,3 8.43,4.4 8.08,6.25L16.82,15H18V13H16V7C16,4.79 14.21,3 12,3M3.28,4L2,5.27L8,11.27V13H6V15H9V21H11V15H11.73L13,16.27V21H15V18.27L18.73,22L20,20.72L15,15.72L8,8.72L3.28,4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "LedVariantOffIcon",
  props: {
    title: {
      type: String,
      default: "Led Variant Off icon"
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
