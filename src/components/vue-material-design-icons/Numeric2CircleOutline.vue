<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon numeric2-circle-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7H13C14.1,7 15,7.9 15,9V11C15,12.1 14.1,13 13,13H11V15H15V17H11L9,17V13C9,11.9 9.9,11 11,11H13V9H9V7M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Numeric2CircleOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Numeric2 Circle Outline icon"
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
