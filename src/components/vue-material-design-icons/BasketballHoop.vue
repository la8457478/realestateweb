<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon basketball-hoop-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21,2H3C1.9,2 1,2.9 1,4V16C1,17.1 1.9,18 3,18H5V14H19V18H21C22.1,18 23,17.1 23,16V4C23,2.9 22.1,2 21,2M17,12H15V9H9V12H7V9C7,7.9 7.9,7 9,7H15C16.1,7 17,7.9 17,9V12M7,16V19.5L8,23L10,21L12,23L14,21L16,23L17,19.5V16H7Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BasketballHoopIcon",
  props: {
    title: {
      type: String,
      default: "Basketball Hoop icon"
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
