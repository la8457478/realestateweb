<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon facebook-box-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M18,5H15.5C13.57,5 12,6.57 12,8.5V11H10V14H12V21H15V14H18V11H15V9C15,8.45 15.45,8 16,8H18V5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FacebookBoxIcon",
  props: {
    title: {
      type: String,
      default: "Facebook Box icon"
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
