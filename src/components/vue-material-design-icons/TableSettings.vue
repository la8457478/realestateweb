<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon table-settings-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22M5,4H19C20.1,4 21,4.9 21,6V18C21,19.1 20.1,20 19,20H5C3.9,20 3,19.1 3,18V6C3,4.9 3.9,4 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TableSettingsIcon",
  props: {
    title: {
      type: String,
      default: "Table Settings icon"
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
