<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon folder-search-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M16.5,12C19,12 21,14 21,16.5C21,17.38 20.75,18.21 20.31,18.9L23.39,22L22,23.39L18.88,20.32C18.19,20.75 17.37,21 16.5,21C14,21 12,19 12,16.5C12,14 14,12 16.5,12M16.5,14C15.12,14 14,15.12 14,16.5C14,17.88 15.12,19 16.5,19C17.88,19 19,17.88 19,16.5C19,15.12 17.88,14 16.5,14M9,4L11,6H19C20.1,6 21,6.9 21,8V11.81C19.83,10.69 18.25,10 16.5,10C12.91,10 10,12.91 10,16.5C10,17.79 10.37,19 11,20H3C1.89,20 1,19.1 1,18V6C1,4.89 1.89,4 3,4H9Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FolderSearchIcon",
  props: {
    title: {
      type: String,
      default: "Folder Search icon"
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
