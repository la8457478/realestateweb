<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon headphones-box-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7.2,18C6.54,18 6,17.46 6,16.8V13.2L6,12C6,8.69 8.69,6 12,6C15.31,6 18,8.69 18,12V13.2L18,16.8C18,17.46 17.46,18 16.8,18H14V14H16V12C16,9.79 14.21,8 12,8C9.79,8 8,9.79 8,12V14H10V18M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HeadphonesBoxIcon",
  props: {
    title: {
      type: String,
      default: "Headphones Box icon"
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
