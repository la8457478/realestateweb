<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon bomb-off-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14.5,2.75C12.7,2.75 11.25,4.2 11.25,6H10V7.29C9.31,7.5 8.67,7.81 8.08,8.2L17.79,17.91C18.58,16.76 19,15.39 19,14C19,10.83 16.89,8.15 14,7.29V6H12.75C12.75,5.03 13.53,4.25 14.5,4.25C15.47,4.25 16.25,5.03 16.25,6C16.25,7.24 17.26,8.25 18.5,8.25C19.74,8.25 20.74,7.24 20.74,6V5.25H19.25V6C19.25,6.42 18.91,6.75 18.5,6.75C18.08,6.75 17.75,6.42 17.75,6C17.75,4.2 16.29,2.75 14.5,2.75M3.41,6.36L2,7.77L5.55,11.32C5.2,12.14 5,13.04 5,14C5,17.86 8.13,21 12,21C12.92,21 13.83,20.81 14.68,20.45L18.23,24L19.64,22.59L3.41,6.36Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BombOffIcon",
  props: {
    title: {
      type: String,
      default: "Bomb Off icon"
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
