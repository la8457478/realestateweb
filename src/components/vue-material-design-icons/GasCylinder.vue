<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon gas-cylinder-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M16,9V14L16,20C16,21.1 15.1,22 14,22H10C8.9,22 8,21.1 8,20V14L8,9C8,7.14 9.27,5.57 11,5.13V4H9V2H15V4H13V5.13C14.73,5.57 16,7.14 16,9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "GasCylinderIcon",
  props: {
    title: {
      type: String,
      default: "Gas Cylinder icon"
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
