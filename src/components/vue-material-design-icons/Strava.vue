<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon strava-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14.92,17.16L16.75,13.53H19.45L14.94,22.5L10.37,13.53H13.07L14.92,17.16M10.63,8.66L8.18,13.55H4.55L10.61,1.5L16.74,13.55H13.11L10.63,8.66Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "StravaIcon",
  props: {
    title: {
      type: String,
      default: "Strava icon"
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
