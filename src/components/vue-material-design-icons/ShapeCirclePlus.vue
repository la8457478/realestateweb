<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon shape-circle-plus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11,19C14.31,19 17,16.31 17,13H19C19,17.42 15.42,21 11,21C6.58,21 3,17.42 3,13C3,8.58 6.58,5 11,5V7C7.69,7 5,9.69 5,13C5,16.31 7.69,19 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ShapeCirclePlusIcon",
  props: {
    title: {
      type: String,
      default: "Shape Circle Plus icon"
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
