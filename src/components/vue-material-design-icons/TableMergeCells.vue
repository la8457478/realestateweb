<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon table-merge-cells-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,10H3V6C3,4.9 3.9,4 5,4H11V6H5V10M19,18H13V20H19C20.1,20 21,19.1 21,18V14H19V18M5,18V14H3V18C3,19.1 3.9,20 5,20H11V18H5M19,4H13V6H19V10H21V6C21,4.9 20.1,4 19,4M8,13V15L11,12L8,9V11H3V13H8M16,11V9L13,12L16,15V13H21V11H16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TableMergeCellsIcon",
  props: {
    title: {
      type: String,
      default: "Table Merge Cells icon"
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
