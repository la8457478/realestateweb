<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon briefcase-check-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M10,2H14C15.1,2 16,2.9 16,4V6H20C21.1,6 22,6.9 22,8V19C22,20.1 21.1,21 20,21H4C2.9,21 2,20.1 2,19V8C2,6.9 2.9,6 4,6H8V4C8,2.9 8.9,2 10,2M14,6V4H10V6H14M10.5,17.5L17.09,10.91L15.68,9.5L10.5,14.67L8.41,12.59L7,14L10.5,17.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BriefcaseCheckIcon",
  props: {
    title: {
      type: String,
      default: "Briefcase Check icon"
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
