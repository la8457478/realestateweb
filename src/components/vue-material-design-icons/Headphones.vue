<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon headphones-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,1C7,1 3,5 3,10V17C3,18.66 4.34,20 6,20H9V12H5V10C5,6.13 8.13,3 12,3C15.87,3 19,6.13 19,10V12H15V20H18C19.66,20 21,18.66 21,17V10C21,5 16.97,1 12,1Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HeadphonesIcon",
  props: {
    title: {
      type: String,
      default: "Headphones icon"
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
