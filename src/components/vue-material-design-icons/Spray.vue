<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon spray-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,4H12V6H10V4M7,3H9V5H7V3M7,6H9V8H7V6M6,8V10H4V8H6M6,5V7H4V5H6M6,2V4H4V2H6M13,22C11.9,22 11,21.1 11,20V10C11,8.9 11.9,8 13,8V7H14V4H17V7H18V8C19.1,8 20,8.9 20,10V20C20,21.1 19.1,22 18,22H13M13,10V20H18V10H13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SprayIcon",
  props: {
    title: {
      type: String,
      default: "Spray icon"
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
