<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon database-export-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14.22,19L17.05,16.17L14.93,14H22V21.07L19.88,19L17.05,21.83L14.22,19M11.39,19L12.39,18H12C7.58,18 4,16.21 4,14V17C4,19.21 7.58,21 12,21C12.47,21 12.93,21 13.38,20.94L11.39,19M17.29,12H20V9C20,10.2 19,11.27 17.29,12M4,9V12C4,14.21 7.58,16 12,16C12.67,16 13.34,15.96 14,15.87L11.07,13C7.09,12.74 4,11.05 4,9M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DatabaseExportIcon",
  props: {
    title: {
      type: String,
      default: "Database Export icon"
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
