<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon page-next-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M22,3H5C3.9,3 3,3.9 3,5V9H5V5H22V19H5V15H3V19C3,20.1 3.9,21 5,21H22C23.1,21 24,20.1 24,19V5C24,3.9 23.1,3 22,3M7,15V13H0V11H7V9L11,12L7,15M20,13H13V11H20V13M20,9H13V7H20V9M17,17H13V15H17V17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PageNextOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Page Next Outline icon"
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
