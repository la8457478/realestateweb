<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon gate-and-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,4V20H14C18.42,20 22,16.42 22,12C22,7.58 18.42,4 14,4H2M4,6H14C17.31,6 20,8.69 20,12C20,15.31 17.31,18 14,18H4V6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "GateAndIcon",
  props: {
    title: {
      type: String,
      default: "Gate And icon"
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
