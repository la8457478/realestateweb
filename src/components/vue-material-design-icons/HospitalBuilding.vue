<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon hospital-building-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,22V7C2,6.45 2.45,6 3,6H7V2H17V6H21C21.55,6 22,6.45 22,7V22H14V17H10V22H2M9,4V10H11V8H13V10H15V4H13V6H11V4H9M4,20H8V17H4V20M4,15H8V12H4V15M16,20H20V17H16V20M16,15H20V12H16V15M10,15H14V12H10V15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HospitalBuildingIcon",
  props: {
    title: {
      type: String,
      default: "Hospital Building icon"
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
