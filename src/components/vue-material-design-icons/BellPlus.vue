<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon bell-plus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,21H14C14,22.1 13.1,23 12,23C10.89,23 10,22.1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4C10,2.9 10.9,2 12,2C13.1,2 14,2.9 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M16,11H13V8H11V11H8V13H11V16H13V13H16V11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BellPlusIcon",
  props: {
    title: {
      type: String,
      default: "Bell Plus icon"
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
