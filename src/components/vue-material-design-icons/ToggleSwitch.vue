<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon toggle-switch-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17,7H7C4.24,7 2,9.24 2,12C2,14.76 4.24,17 7,17H17C19.76,17 22,14.76 22,12C22,9.24 19.76,7 17,7M17,15C15.34,15 14,13.66 14,12C14,10.34 15.34,9 17,9C18.66,9 20,10.34 20,12C20,13.66 18.66,15 17,15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ToggleSwitchIcon",
  props: {
    title: {
      type: String,
      default: "Toggle Switch icon"
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
