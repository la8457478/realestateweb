<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon text-short-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,9H20V11H4V9M4,13H14V15H4V13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TextShortIcon",
  props: {
    title: {
      type: String,
      default: "Text Short icon"
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
