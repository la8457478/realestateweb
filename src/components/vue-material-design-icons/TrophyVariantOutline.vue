<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon trophy-variant-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7,2V4H2V11C2,12 3,13 4,13H7.2C7.6,14.9 8.6,16.6 11,16.9V19C8,19.2 8,20.3 8,21.6V22H16V21.7C16,20.4 16,19.3 13,19.1V17C15.5,16.7 16.5,15 16.8,13.1H20C21,13.1 22,12.1 22,11.1V4H17V2H7M9,4H15V12C15,13.66 13.66,15 12,15C10,15 9,13.66 9,12V4M4,6H7V8L7,11H4V6M17,6H20V11H17V6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TrophyVariantOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Trophy Variant Outline icon"
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
