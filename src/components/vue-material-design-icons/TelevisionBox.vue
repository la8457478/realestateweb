<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon television-box-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M16,16L19,8H16.5L15,12.5L13.5,8H5V10H8V16H10V10H11.77L14,16H16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TelevisionBoxIcon",
  props: {
    title: {
      type: String,
      default: "Television Box icon"
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
