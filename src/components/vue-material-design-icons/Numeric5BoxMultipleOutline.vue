<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon numeric5-box-multiple-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17,13V11C17,9.89 16.1,9 15,9H13V7H17V5H11V11H15V13H11V15H15C16.1,15 17,14.1 17,13M3,5H1V21C1,22.1 1.9,23 3,23H19V21H3M21,17H7V3H21M21,1H7C5.9,1 5,1.9 5,3V17C5,18.1 5.9,19 7,19H21C22.1,19 23,18.1 23,17V3C23,1.9 22.1,1 21,1Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Numeric5BoxMultipleOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Numeric5 Box Multiple Outline icon"
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
