<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon assistant-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,2H5C3.9,2 3,2.9 3,4V18C3,19.1 3.9,20 5,20H9L12,23L15,20H19C20.1,20 21,19.1 21,18V4C21,2.9 20.1,2 19,2M13.88,12.88L12,17L10.12,12.88L6,11L10.12,9.12L12,5L13.88,9.12L18,11">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AssistantIcon",
  props: {
    title: {
      type: String,
      default: "Assistant icon"
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
