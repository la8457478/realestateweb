<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon video3d-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,7H9C10.1,7 11,7.9 11,9V15C11,16.1 10.1,17 9,17H5V15H9V13H6V11H9V9H5V7M13,7H16C17.66,7 19,8.34 19,10V14C19,15.66 17.66,17 16,17H13V7M16,15C16.55,15 17,14.55 17,14V10C17,9.45 16.55,9 16,9H15V15H16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Video3dIcon",
  props: {
    title: {
      type: String,
      default: "Video3d icon"
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
