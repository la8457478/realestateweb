<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pine-tree-box-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M4,2H20C21.1,2 22,2.9 22,4V20C22,21.1 21.1,22 20,22H4C2.9,22 2,21.1 2,20V4C2,2.9 2.9,2 4,2M11,19H13V17H18L14,13H17L13,9H16L12,5L8,9H11L7,13H10L6,17H11V19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PineTreeBoxIcon",
  props: {
    title: {
      type: String,
      default: "Pine Tree Box icon"
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
