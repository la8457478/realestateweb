<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon alpha-p-box-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,7V17H11V13H13C14.1,13 15,12.1 15,11V9C15,7.9 14.1,7 13,7H9M11,9H13V11H11V9M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "AlphaPBoxIcon",
  props: {
    title: {
      type: String,
      default: "Alpha P Box icon"
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
