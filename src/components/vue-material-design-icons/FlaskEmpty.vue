<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon flask-empty-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,22C4.34,22 3,20.66 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6C8.45,6 8,5.55 8,5V4C8,2.9 8.9,2 10,2H14C15.1,2 16,2.9 16,4V5C16,5.55 15.55,6 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19C21,20.66 19.66,22 18,22H6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FlaskEmptyIcon",
  props: {
    title: {
      type: String,
      default: "Flask Empty icon"
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
