<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon checkbox-multiple-blank-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,16V4H8V16H20M22,16C22,17.1 21.1,18 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20C21.1,2 22,2.9 22,4V16M16,20V22H4C2.9,22 2,21.1 2,20V7H4V20H16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CheckboxMultipleBlankOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Checkbox Multiple Blank Outline icon"
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
