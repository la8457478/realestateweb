<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon google-glass-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,11V13.5H18.87C18.26,17 15.5,19.5 12,19.5C7.86,19.5 4.5,16.14 4.5,12C4.5,7.86 7.86,4.5 12,4.5C14.09,4.5 15.9,5.39 17.16,6.84L18.93,5.06C17.24,3.18 14.83,2 12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.5,22 21.5,17.5 21.5,12V11H13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "GoogleGlassIcon",
  props: {
    title: {
      type: String,
      default: "Google Glass icon"
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
