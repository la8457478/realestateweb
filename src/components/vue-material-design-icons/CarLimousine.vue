<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon car-limousine-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M1,6L2.5,7.5L1,9L2.5,10.5L1,12L2.5,13.5L1,15H15C15,16.66 16.34,18 18,18C19.66,18 21,16.66 21,15H23V12C23,10.89 22.11,10 21,10H19L16,6H1M4.62,7.5H10.5V10H4.12L3.12,9L4.62,7.5M12,7.5H15.5L17.46,10H12V7.5M18,13.5C18.83,13.5 19.5,14.17 19.5,15C19.5,15.83 18.83,16.5 18,16.5C17.17,16.5 16.5,15.83 16.5,15C16.5,14.17 17.17,13.5 18,13.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CarLimousineIcon",
  props: {
    title: {
      type: String,
      default: "Car Limousine icon"
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
