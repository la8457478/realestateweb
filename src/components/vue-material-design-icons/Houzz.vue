<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon houzz-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14,20.95H20V10.78L8,7.34V3.05H4V20.95H10V15.31H14V20.95Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HouzzIcon",
  props: {
    title: {
      type: String,
      default: "Houzz icon"
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
