<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon server-plus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,4H20C20.55,4 21,4.45 21,5V9C21,9.55 20.55,10 20,10H4C3.45,10 3,9.55 3,9V5C3,4.45 3.45,4 4,4M9,8H10V6H9V8M5,6V8H7V6H5M8,16H11V13H13V16H16V18H13V21H11V18H8V16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ServerPlusIcon",
  props: {
    title: {
      type: String,
      default: "Server Plus icon"
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
