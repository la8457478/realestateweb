<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon chevron-down-box-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.9 20.1,3 19,3M12,15.71L6,9.71L7.41,8.29L12,12.88L16.59,8.29L18,9.71L12,15.71Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ChevronDownBoxIcon",
  props: {
    title: {
      type: String,
      default: "Chevron Down Box icon"
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
