<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon car-door-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,14H16V16H19V14M22,21H3V11L11,3H21C21.55,3 22,3.45 22,4V21M11.83,5L5.83,11H20V5H11.83Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CarDoorIcon",
  props: {
    title: {
      type: String,
      default: "Car Door icon"
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
