<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon zip-disk-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7,3L3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5L17,3V5C17,5.55 16.55,6 16,6H10C9.45,6 9,5.55 9,5V3H7M8,10H16C16.55,10 17,10.45 17,11V19H7V11C7,10.45 7.45,10 8,10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ZipDiskIcon",
  props: {
    title: {
      type: String,
      default: "Zip Disk icon"
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
