<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon egg-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19.5,14.5C19.5,18.64 16.14,22 12,22C7.86,22 4.5,18.64 4.5,14.5C4.5,10.36 7.86,2 12,2C16.14,2 19.5,10.36 19.5,14.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "EggIcon",
  props: {
    title: {
      type: String,
      default: "Egg icon"
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
