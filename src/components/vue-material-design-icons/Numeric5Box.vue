<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon numeric5-box-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,9H11V11H13C14.1,11 15,11.9 15,13V15C15,16.11 14.1,17 13,17H9V15H13V13H9V7H15M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Numeric5BoxIcon",
  props: {
    title: {
      type: String,
      default: "Numeric5 Box icon"
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
