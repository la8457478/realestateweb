<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon surround-sound31-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,17C12.45,17 12,16.55 12,16C12,15.45 12.45,15 13,15C13.55,15 14,15.45 14,16C14,16.55 13.55,17 13,17M19,7V15H20V17H16V15H17V9H16L17,7H19M4,7H8C9.1,7 10,7.9 10,9V15C10,16.1 9.1,17 8,17H4V15H8V13H5V11H8V9H4V7Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SurroundSound31Icon",
  props: {
    title: {
      type: String,
      default: "Surround Sound31 icon"
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
