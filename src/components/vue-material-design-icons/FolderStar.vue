<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon folder-star-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M20,6H12L10,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V8C22,6.9 21.1,6 20,6M17.94,17L15,15.28L12.06,17L12.84,13.67L10.25,11.43L13.66,11.14L15,8L16.34,11.14L19.75,11.43L17.16,13.67L17.94,17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FolderStarIcon",
  props: {
    title: {
      type: String,
      default: "Folder Star icon"
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
