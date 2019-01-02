<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon tilde-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,15C2,15 2,9 8,9C12,9 12.5,12.5 15.5,12.5C19.5,12.5 19.5,9 19.5,9H22C22,9 22,15 16,15C12,15 10.5,11.5 8.5,11.5C4.5,11.5 4.5,15 4.5,15H2">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TildeIcon",
  props: {
    title: {
      type: String,
      default: "Tilde icon"
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
