<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon fridge-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7,2H17C18.1,2 19,2.9 19,4V9H5V4C5,2.9 5.9,2 7,2M19,19C19,20.1 18.1,21 17,21V22H15V21H9V22H7V21C5.9,21 5,20.1 5,19V10H19V19M8,5V7H10V5H8M8,12V15H10V12H8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FridgeIcon",
  props: {
    title: {
      type: String,
      default: "Fridge icon"
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
