<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon power-socket-us-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M8,7H10V12H8V7M4.22,2H19.78C21,2 22,3 22,4.22V19.78C22,21.01 21.01,22 19.78,22H4.22C3,22 2,21 2,19.78V4.22C2,2.99 2.99,2 4.22,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4M14,7.5H16V11.5H14V7.5M10.5,16.25C10.5,15.42 11.17,14.75 12,14.75C12.83,14.75 13.5,15.42 13.5,16.25V17H10.5V16.25Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PowerSocketUsIcon",
  props: {
    title: {
      type: String,
      default: "Power Socket Us icon"
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
