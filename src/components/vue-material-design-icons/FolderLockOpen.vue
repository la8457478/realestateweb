<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon folder-lock-open-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,6C21.1,6 22,6.9 22,8V18C22,19.1 21.1,20 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H20M19,17V13H18L16,13H14V11C14,10.45 14.45,10 15,10C15.55,10 16,10.45 16,11H18C18,9.34 16.66,8 15,8C13.34,8 12,9.34 12,11V13H11V17H19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FolderLockOpenIcon",
  props: {
    title: {
      type: String,
      default: "Folder Lock Open icon"
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
