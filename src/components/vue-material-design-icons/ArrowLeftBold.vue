<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon arrow-left-bold-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArrowLeftBoldIcon",
  props: {
    title: {
      type: String,
      default: "Arrow Left Bold icon"
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
