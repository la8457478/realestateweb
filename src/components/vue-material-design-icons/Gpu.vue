<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon gpu-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,7V8.5H3V17H4.5V7C3.7,7 2.8,7 2,7M6,7V7L6,16H7V17H14V16H22V7H6M17.5,9C18.88,9 20,10.12 20,11.5C20,12.88 18.88,14 17.5,14C16.12,14 15,12.88 15,11.5C15,10.12 16.12,9 17.5,9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "GpuIcon",
  props: {
    title: {
      type: String,
      default: "Gpu icon"
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
