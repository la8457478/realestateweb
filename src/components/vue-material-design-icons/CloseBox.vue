<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon close-box-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,3H16.3H7.7H5C3.9,3 3,3.9 3,5V7.7V16.4V19C3,20.1 3.9,21 5,21H7.7H16.4H19C20.1,21 21,20.1 21,19V16.3V7.7V5C21,3.9 20.1,3 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CloseBoxIcon",
  props: {
    title: {
      type: String,
      default: "Close Box icon"
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
