<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon barrel-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M18,19H19V21H5V19H6V13H5V11H6V5H5V3H19V5H18V11H19V13H18V19M9,13C9,14.66 10.34,16 12,16C13.66,16 15,14.66 15,13C15,11 12,7.63 12,7.63C12,7.63 9,11 9,13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BarrelIcon",
  props: {
    title: {
      type: String,
      default: "Barrel icon"
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
