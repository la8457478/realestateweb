<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon collapse-all-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M14,4H4V14H2V4C2,2.9 2.9,2 4,2H14V4M18,6H8C6.9,6 6,6.9 6,8V18H8V8H18V6M22,12V20C22,21.1 21.1,22 20,22H12C10.9,22 10,21.1 10,20V12C10,10.9 10.9,10 12,10H20C21.1,10 22,10.9 22,12M20,15H12V17H20V15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CollapseAllIcon",
  props: {
    title: {
      type: String,
      default: "Collapse All icon"
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
