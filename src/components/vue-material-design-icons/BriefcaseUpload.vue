<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon briefcase-upload-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,2H14C15.1,2 16,2.9 16,4V6H20C21.1,6 22,6.9 22,8V19C22,20.1 21.1,21 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14M12,9L7,14H10V18H14V14H17L12,9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BriefcaseUploadIcon",
  props: {
    title: {
      type: String,
      default: "Briefcase Upload icon"
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
