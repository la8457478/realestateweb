<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon folder-multiple-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M22,4H14L12,2H6C4.9,2 4,2.9 4,4V16C4,17.1 4.9,18 6,18H22C23.1,18 24,17.1 24,16V6C24,4.9 23.1,4 22,4M2,6H0V11H0V20C0,21.1 0.9,22 2,22H20V20H2V6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FolderMultipleIcon",
  props: {
    title: {
      type: String,
      default: "Folder Multiple icon"
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
