<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon routes-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11,10H5L3,8L5,6H11V3L12,2L13,3V4H19L21,6L19,8H13V10H19L21,12L19,14H13V20C14.1,20 15,20.9 15,22H9C9,20.9 9.9,20 11,20V10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RoutesIcon",
  props: {
    title: {
      type: String,
      default: "Routes icon"
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
