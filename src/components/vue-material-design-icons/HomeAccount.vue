<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon home-account-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75C13.24,8.75 14.25,9.76 14.25,11C14.25,12.24 13.24,13.25 12,13.25C10.76,13.25 9.75,12.24 9.75,11C9.75,9.76 10.76,8.75 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HomeAccountIcon",
  props: {
    title: {
      type: String,
      default: "Home Account icon"
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
