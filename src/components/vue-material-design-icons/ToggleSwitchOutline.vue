<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon toggle-switch-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17,10C18.1,10 19,10.9 19,12C19,13.1 18.1,14 17,14C15.9,14 15,13.1 15,12C15,10.9 15.9,10 17,10M17,7C19.76,7 22,9.24 22,12C22,14.76 19.76,17 17,17H7C4.24,17 2,14.76 2,12C2,9.24 4.24,7 7,7H17M7,9C5.34,9 4,10.34 4,12C4,13.66 5.34,15 7,15H17C18.66,15 20,13.66 20,12C20,10.34 18.66,9 17,9H7Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ToggleSwitchOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Toggle Switch Outline icon"
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
