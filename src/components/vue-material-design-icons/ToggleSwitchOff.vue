<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon toggle-switch-off-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M17,7H7C4.24,7 2,9.24 2,12C2,14.76 4.24,17 7,17H17C19.76,17 22,14.76 22,12C22,9.24 19.76,7 17,7M7,15C5.34,15 4,13.66 4,12C4,10.34 5.34,9 7,9C8.66,9 10,10.34 10,12C10,13.66 8.66,15 7,15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ToggleSwitchOffIcon",
  props: {
    title: {
      type: String,
      default: "Toggle Switch Off icon"
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
