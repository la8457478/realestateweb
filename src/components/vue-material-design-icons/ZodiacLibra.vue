<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon zodiac-libra-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,16V18H13V15.91C16,15.36 17.96,12.5 17.41,9.5C16.86,6.5 14,4.54 11,5.09C8,5.65 6.04,8.5 6.59,11.5C7,13.74 8.76,15.5 11,15.91V18H4V16H6.92C5.37,14.59 4.5,12.59 4.5,10.5C4.5,6.36 7.86,3 12,3C16.14,3 19.5,6.36 19.5,10.5C19.5,12.59 18.63,14.59 17.08,16H20M20,19H4V21H20V19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ZodiacLibraIcon",
  props: {
    title: {
      type: String,
      default: "Zodiac Libra icon"
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
