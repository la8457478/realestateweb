<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon arrow-right-box-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,21C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V19C21,20.11 20.1,21 19,21H5M6,13H14.5L11,16.5L12.42,17.92L18.34,12L12.42,6.08L11,7.5L14.5,11H6V13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArrowRightBoxIcon",
  props: {
    title: {
      type: String,
      default: "Arrow Right Box icon"
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
