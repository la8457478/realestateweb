<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon hexagram-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14.5,7.66L20.64,6.97L17,12L20.68,16.97L14.5,16.32L12.03,22L9.5,16.34L3.36,17.03L7,12L3.32,7.03L9.5,7.68L11.97,2L14.5,7.66Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HexagramIcon",
  props: {
    title: {
      type: String,
      default: "Hexagram icon"
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
