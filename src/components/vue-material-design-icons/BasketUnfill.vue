<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon basket-unfill-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,10H6V7H3V10M5,5H8V2H5V5M8,10H11V7H8V10M17,1L12,6H15V10H19V6H22L17,1M7.5,22C6.72,22 6.04,21.55 5.71,20.9V20.9L3.1,13.44L3,13C3,12.45 3.45,12 4,12H20C20.55,12 21,12.45 21,13L20.96,13.29L18.29,20.9C17.96,21.55 17.28,22 16.5,22H7.5M7.61,20H16.39L18.57,14H5.42L7.61,20Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BasketUnfillIcon",
  props: {
    title: {
      type: String,
      default: "Basket Unfill icon"
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
