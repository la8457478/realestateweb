<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pharmacy-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M16,14H13V17H11V14H8V12H11V9H13V12H16M21,5H18.35L19.5,1.85L17.15,1L15.69,5H3V7L5,13L3,19V21H21V19L19,13L21,7V5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PharmacyIcon",
  props: {
    title: {
      type: String,
      default: "Pharmacy icon"
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
