<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon quality-high-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14.5,13.5H16.5V10.5H14.5M18,14C18,14.55 17.55,15 17,15H16.25V16.5H14.75V15H14C13.45,15 13,14.55 13,14V10C13,9.45 13.45,9 14,9H17C17.55,9 18,9.45 18,10M11,15H9.5V13H7.5V15H6V9H7.5V11.5H9.5V9H11M19,4H5C3.89,4 3,4.89 3,6V18C3,19.1 3.9,20 5,20H19C20.1,20 21,19.1 21,18V6C21,4.89 20.1,4 19,4Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "QualityHighIcon",
  props: {
    title: {
      type: String,
      default: "Quality High icon"
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
