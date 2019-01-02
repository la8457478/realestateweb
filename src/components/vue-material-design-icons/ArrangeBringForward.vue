<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon arrange-bring-forward-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,2H16V16H2V2M22,8V22H8V18H10V20H20V10H18V8H22Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArrangeBringForwardIcon",
  props: {
    title: {
      type: String,
      default: "Arrange Bring Forward icon"
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
