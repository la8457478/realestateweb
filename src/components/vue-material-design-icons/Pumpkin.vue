<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pumpkin-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6.5,6C7.47,6 8.37,6.5 9.11,7.38C9.66,6.79 10.31,6.36 11,6.15V4C11,2.9 11.9,2 13,2H15V4H13V6.15C13.69,6.36 14.34,6.79 14.89,7.38C15.63,6.5 16.53,6 17.5,6C20,6 22,9.36 22,13.5C22,17.64 20,21 17.5,21C16.53,21 15.63,20.5 14.89,19.62C14.08,20.5 13.08,21 12,21C10.92,21 9.92,20.5 9.11,19.62C8.37,20.5 7.47,21 6.5,21C4,21 2,17.64 2,13.5C2,9.36 4,6 6.5,6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PumpkinIcon",
  props: {
    title: {
      type: String,
      default: "Pumpkin icon"
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
