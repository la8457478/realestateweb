<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon delete-sweep-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,16H19V18H15V16M15,8H22V10H15V8M15,12H21V14H15V12M3,18C3,19.1 3.9,20 5,20H11C12.1,20 13,19.1 13,18V8H3V18M14,5H11L10,4H6L5,5H2V7H14V5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DeleteSweepIcon",
  props: {
    title: {
      type: String,
      default: "Delete Sweep icon"
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
