<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon temperature-fahrenheit-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11,20V5H20V8H14V11H19V14H14V20H11M6,3C7.66,3 9,4.34 9,6C9,7.66 7.66,9 6,9C4.34,9 3,7.66 3,6C3,4.34 4.34,3 6,3M6,5C5.45,5 5,5.45 5,6C5,6.55 5.45,7 6,7C6.55,7 7,6.55 7,6C7,5.45 6.55,5 6,5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TemperatureFahrenheitIcon",
  props: {
    title: {
      type: String,
      default: "Temperature Fahrenheit icon"
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
