<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon unity-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9.11,17H6.5L1.59,12L6.5,7H9.11L10.42,4.74L17.21,3L19.08,9.74L17.77,12L19.08,14.26L17.21,21L10.42,19.26L9.11,17M9.25,16.75L14.38,18.13L11.42,13H5.5L9.25,16.75M16.12,17.13L17.5,12L16.12,6.87L13.15,12L16.12,17.13M9.25,7.25L5.5,11H11.42L14.38,5.87L9.25,7.25Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "UnityIcon",
  props: {
    title: {
      type: String,
      default: "Unity icon"
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
