<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon arrow-right-bold-circle-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,12C2,6.48 6.48,2 12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12M17,12L12,7V10H8V14H12V17L17,12Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArrowRightBoldCircleIcon",
  props: {
    title: {
      type: String,
      default: "Arrow Right Bold Circle icon"
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
