<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon numeric8-circle-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11,13V15H13V13H11M11,9V11H13V9H11M11,17C9.9,17 9,16.1 9,15V13.5C9,12.67 9.67,12 10.5,12C9.67,12 9,11.33 9,10.5V9C9,7.9 9.9,7 11,7H13C14.1,7 15,7.9 15,9V10.5C15,11.33 14.33,12 13.5,12C14.33,12 15,12.67 15,13.5V15C15,16.1 14.1,17 13,17H11M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Numeric8CircleOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Numeric8 Circle Outline icon"
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
