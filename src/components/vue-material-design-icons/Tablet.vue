<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon tablet-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18C1,19.1 1.9,20 3,20H21C22.1,20 23,19.1 23,18V6C23,4.89 22.1,4 21,4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TabletIcon",
  props: {
    title: {
      type: String,
      default: "Tablet icon"
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
