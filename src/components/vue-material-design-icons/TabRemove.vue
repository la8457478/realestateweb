<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon tab-remove-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7.46,11.88L8.88,10.46L11,12.59L13.12,10.46L14.54,11.88L12.41,14L14.54,16.12L13.12,17.54L11,15.41L8.88,17.54L7.46,16.12L9.59,14L7.46,11.88M3,3H21C22.1,3 23,3.9 23,5V19C23,20.1 22.1,21 21,21H3C1.9,21 1,20.1 1,19V5C1,3.9 1.9,3 3,3M3,5V19H21V9H13V5H3Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TabRemoveIcon",
  props: {
    title: {
      type: String,
      default: "Tab Remove icon"
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
