<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon keg-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,22V20H6V16H5V14H6V11H5V7H11V3H10V2H11L13,2H14V3H13V7H19V11H18V14H19V16H18V20H19V22H5M17,9C17,8.45 16.55,8 16,8H14C13.45,8 13,8.45 13,9C13,9.55 13.45,10 14,10H16C16.55,10 17,9.55 17,9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "KegIcon",
  props: {
    title: {
      type: String,
      default: "Keg icon"
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
