<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon folder-account-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,17H11V16C11,14.67 13.67,14 15,14C16.33,14 19,14.67 19,16V17M15,9C16.1,9 17,9.9 17,11C17,12.1 16.1,13 15,13C13.9,13 13,12.1 13,11C13,9.89 13.9,9 15,9M20,6C21.1,6 22,6.9 22,8V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4H10L12,6H20M20,18V8H11.17L9.17,6H4V18H20Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FolderAccountOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Folder Account Outline icon"
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
