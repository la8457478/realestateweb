<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon zodiac-sagittarius-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M22,2V12H20V5.41L10.41,15L12.71,17.29L11.29,18.71L9,16.41L3.71,21.71L2.29,20.29L7.59,15L5.29,12.71L6.71,11.29L9,13.59L18.59,4H12V2H22Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ZodiacSagittariusIcon",
  props: {
    title: {
      type: String,
      default: "Zodiac Sagittarius icon"
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
