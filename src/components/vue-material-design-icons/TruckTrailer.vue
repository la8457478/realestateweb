<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon truck-trailer-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M22,15V17H10C10,18.66 8.66,20 7,20C5.34,20 4,18.66 4,17H2V6C2,4.9 2.9,4 4,4H17C18.1,4 19,4.9 19,6V15H22M7,16C6.45,16 6,16.45 6,17C6,17.55 6.45,18 7,18C7.55,18 8,17.55 8,17C8,16.45 7.55,16 7,16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TruckTrailerIcon",
  props: {
    title: {
      type: String,
      default: "Truck Trailer icon"
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
