<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon vector-radius-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,4H4V2H10V4C15.52,4 20,8.48 20,14H22V20H20V22H18V20H16V14H18C18,9.58 14.42,6 10,6V8H4V6H2V4M18,16V18H20V16H18M6,4V6H8V4H6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "VectorRadiusIcon",
  props: {
    title: {
      type: String,
      default: "Vector Radius icon"
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
