<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon truck-check-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,4H17V8H20L23,12V17H21C21,18.66 19.66,20 18,20C16.34,20 15,18.66 15,17H9C9,18.66 7.66,20 6,20C4.34,20 3,18.66 3,17H1V6C1,4.89 1.9,4 3,4M17,9.5V12H21.47L19.5,9.5H17M6,15.5C5.17,15.5 4.5,16.17 4.5,17C4.5,17.83 5.17,18.5 6,18.5C6.83,18.5 7.5,17.83 7.5,17C7.5,16.17 6.83,15.5 6,15.5M18,15.5C17.17,15.5 16.5,16.17 16.5,17C16.5,17.83 17.17,18.5 18,18.5C18.83,18.5 19.5,17.83 19.5,17C19.5,16.17 18.83,15.5 18,15.5M8,14L14,8L12.59,6.58L8,11.17L5.91,9.08L4.5,10.5L8,14Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TruckCheckIcon",
  props: {
    title: {
      type: String,
      default: "Truck Check icon"
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
