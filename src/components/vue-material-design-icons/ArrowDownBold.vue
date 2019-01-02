<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon arrow-down-bold-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ArrowDownBoldIcon",
  props: {
    title: {
      type: String,
      default: "Arrow Down Bold icon"
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
