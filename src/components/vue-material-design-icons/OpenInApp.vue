<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon open-in-app-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,10L8,14H11V20H13V14H16M19,4H5C3.89,4 3,4.9 3,6V18C3,19.1 3.9,20 5,20H9V18H5V8H19V18H15V20H19C20.1,20 21,19.1 21,18V6C21,4.9 20.1,4 19,4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "OpenInAppIcon",
  props: {
    title: {
      type: String,
      default: "Open In App icon"
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
