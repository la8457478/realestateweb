<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pandora-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,20C10,20.55 9.55,21 9,21H4V3H13.71C17.44,3 20.46,6.02 20.46,9.75C20.46,13.5 17.44,16.5 13.71,16.5H10V20Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PandoraIcon",
  props: {
    title: {
      type: String,
      default: "Pandora icon"
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
