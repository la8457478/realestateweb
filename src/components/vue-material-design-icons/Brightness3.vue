<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon brightness3-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,2C7.95,2 6.95,2.16 6,2.46C10.06,3.73 13,7.5 13,12C13,16.5 10.06,20.27 6,21.54C6.95,21.84 7.95,22 9,22C14.52,22 19,17.52 19,12C19,6.48 14.52,2 9,2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Brightness3Icon",
  props: {
    title: {
      type: String,
      default: "Brightness3 icon"
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
