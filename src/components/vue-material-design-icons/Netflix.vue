<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon netflix-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6.5,2H10.5L13.44,10.83L13.5,2H17.5V22C16.25,21.78 14.87,21.64 13.41,21.58L10.5,13L10.43,21.59C9.03,21.65 7.7,21.79 6.5,22V2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "NetflixIcon",
  props: {
    title: {
      type: String,
      default: "Netflix icon"
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
