<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon folder-network-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,15V5C3,3.9 3.9,3 5,3H11L13,5H19C20.1,5 21,5.9 21,7V15C21,16.1 20.1,17 19,17H13V19H14C14.55,19 15,19.45 15,20H22V22H15C15,22.55 14.55,23 14,23H10C9.45,23 9,22.55 9,22H2V20H9C9,19.45 9.45,19 10,19H11V17H5C3.9,17 3,16.1 3,15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FolderNetworkIcon",
  props: {
    title: {
      type: String,
      default: "Folder Network icon"
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
