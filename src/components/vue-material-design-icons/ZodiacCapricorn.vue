<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon zodiac-capricorn-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,13C14.3,13 13.61,13.19 13,13.55V6C13,4.34 11.66,3 10,3C9.25,3 8.55,3.29 8,3.78C7.45,3.28 6.74,3 6,3V5C6.55,5 7,5.45 7,6V16H9V6C9,5.45 9.45,5 10,5C10.55,5 11,5.45 11,6V17C11,18.1 10.1,19 9,19V21C10.15,21 11.25,20.5 12,19.62C13.45,21.29 15.97,21.47 17.64,20C19.31,18.58 19.5,16.05 18.04,14.38C17.28,13.5 16.17,13 15,13M15,19C13.9,19 13,18.1 13,17C13,15.9 13.9,15 15,15C16.1,15 17,15.9 17,17C17,18.1 16.1,19 15,19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ZodiacCapricornIcon",
  props: {
    title: {
      type: String,
      default: "Zodiac Capricorn icon"
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
