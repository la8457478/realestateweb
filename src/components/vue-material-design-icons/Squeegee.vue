<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon squeegee-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M22,2V5H2V2H22M2,8H7L9,10H10V20C10,21.1 10.9,22 12,22C13.1,22 14,21.1 14,20V10H15L17,8H22V6H2V8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SqueegeeIcon",
  props: {
    title: {
      type: String,
      default: "Squeegee icon"
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
