<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon code-less-than-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13.59,7.41L9,12L13.59,16.6L15,15.18L11.82,12L15,8.82M19,3C20.11,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CodeLessThanIcon",
  props: {
    title: {
      type: String,
      default: "Code Less Than icon"
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
