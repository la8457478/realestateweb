<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon collapse-all-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,2C2.9,2 2,2.9 2,4V14H4V4H14V2H4M8,6C6.9,6 6,6.9 6,8V18H8V8H18V6H8M20,12V20H12V12H20M20,10H12C10.9,10 10,10.9 10,12V20C10,21.1 10.9,22 12,22H20C21.1,22 22,21.1 22,20V12C22,10.9 21.1,10 20,10M19,17H13V15H19V17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CollapseAllOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Collapse All Outline icon"
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
