<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon folder-clock-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,12H16.5V16.25L19.36,17.94L18.61,19.16L15,17V12M19,8H3V18H9.29C9.1,17.37 9,16.7 9,16C9,12.13 12.13,9 16,9C17.07,9 18.09,9.24 19,9.67V8M3,20C1.89,20 1,19.1 1,18V6C1,4.9 1.9,4 3,4H9L11,6H19C20.1,6 21,6.9 21,8V11.1C22.24,12.36 23,14.09 23,16C23,19.87 19.87,23 16,23C13.62,23 11.5,21.81 10.25,20H3M16,11C13.24,11 11,13.24 11,16C11,18.76 13.24,21 16,21C18.76,21 21,18.76 21,16C21,13.24 18.76,11 16,11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FolderClockOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Folder Clock Outline icon"
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
