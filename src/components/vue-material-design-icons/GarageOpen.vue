<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon garage-open-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "GarageOpenIcon",
  props: {
    title: {
      type: String,
      default: "Garage Open icon"
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
