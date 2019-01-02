<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-e-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7V17H15V15H11V13H15V11H11V9H15V7H9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaEIcon",
  props: {
    title: {
      type: String,
      default: "Alpha E icon"
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
