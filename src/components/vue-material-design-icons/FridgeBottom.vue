<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon fridge-bottom-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7,2C5.9,2 5,2.9 5,4V19C5,20.1 5.9,21 7,21V22H9V21H15V22H17V21C18.1,21 19,20.1 19,19V4C19,2.9 18.1,2 17,2H7M8,6H10V8H8V6M7,11H17V19H7V11M8,12V15H10V12H8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FridgeBottomIcon",
  props: {
    title: {
      type: String,
      default: "Fridge Bottom icon"
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
