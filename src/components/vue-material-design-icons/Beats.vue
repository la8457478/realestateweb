<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon beats-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7C10.87,7 9.84,7.37 9,8V2.46C9.95,2.16 10.95,2 12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,8.3 4,5.07 7,3.34V12M12,9C13.66,9 15,10.34 15,12C15,13.66 13.66,15 12,15C10.34,15 9,13.66 9,12C9,10.34 10.34,9 12,9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BeatsIcon",
  props: {
    title: {
      type: String,
      default: "Beats icon"
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
