<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pan-vertical-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,2.5L8,7H16L12,2.5M12,10C10.9,10 10,10.9 10,12C10,13.1 10.9,14 12,14C13.1,14 14,13.1 14,12C14,10.9 13.1,10 12,10M8,17L12,21.5L16,17H8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PanVerticalIcon",
  props: {
    title: {
      type: String,
      default: "Pan Vertical icon"
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
