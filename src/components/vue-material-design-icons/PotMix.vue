<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pot-mix-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,19C19,20.1 18.1,21 17,21H7C5.9,21 5,20.1 5,19V13H3V10H14L18,3.07L19.73,4.07L16.31,10H21V13H19V19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PotMixIcon",
  props: {
    title: {
      type: String,
      default: "Pot Mix icon"
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
