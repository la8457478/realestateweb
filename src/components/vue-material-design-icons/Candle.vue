<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon candle-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12.5,2C10.84,2 9.5,5.34 9.5,7C9.5,8.66 10.84,10 12.5,10C14.16,10 15.5,8.66 15.5,7C15.5,5.34 14.16,2 12.5,2M12.5,6.5C13.05,6.5 13.5,6.95 13.5,7.5C13.5,8.05 13.05,8.5 12.5,8.5C11.95,8.5 11.5,8.05 11.5,7.5C11.5,6.95 11.95,6.5 12.5,6.5M10,11C9.45,11 9,11.45 9,12V20H7C6.45,20 6,19.55 6,19V18C6,17.45 5.55,17 5,17C4.45,17 4,17.45 4,18V19C4,20.66 5.34,22 7,22H19C19.55,22 20,21.55 20,21C20,20.45 19.55,20 19,20H16V12C16,11.45 15.55,11 15,11H10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CandleIcon",
  props: {
    title: {
      type: String,
      default: "Candle icon"
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
