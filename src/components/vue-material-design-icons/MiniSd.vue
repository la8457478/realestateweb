<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon mini-sd-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,4C4.9,4 4,4.9 4,6V18C4,19.1 4.9,20 6,20H18C19.1,20 20,19.1 20,18V12L18,10V6C18,4.9 17.1,4 16,4H6M7,6H9V10H7V6M10,6H12V10H10V6M13,6H15V10H13V6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MiniSdIcon",
  props: {
    title: {
      type: String,
      default: "Mini Sd icon"
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
