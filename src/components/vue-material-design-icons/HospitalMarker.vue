<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon hospital-marker-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,2C15.86,2 19,5.13 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9C5,5.13 8.13,2 12,2M9,6V12H11V10H13V12H15V6H13V8H11V6H9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HospitalMarkerIcon",
  props: {
    title: {
      type: String,
      default: "Hospital Marker icon"
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
