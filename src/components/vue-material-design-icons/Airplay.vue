<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon airplay-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,22H18L12,16M21,3H3C1.9,3 1,3.9 1,5V17C1,18.1 1.9,19 3,19H7V17H3V5H21V17H17V19H21C22.1,19 23,18.1 23,17V5C23,3.9 22.1,3 21,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AirplayIcon",
  props: {
    title: {
      type: String,
      default: "Airplay icon"
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
