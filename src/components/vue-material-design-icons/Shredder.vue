<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon shredder-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,3V7H8V5H16V7H18V3H6M5,8C3.34,8 2,9.34 2,11V17H5V14H19V17H22V11C22,9.34 20.66,8 19,8H5M18,10C18.55,10 19,10.45 19,11C19,11.55 18.55,12 18,12C17.45,12 17,11.55 17,11C17,10.45 17.45,10 18,10M7,16V21H9V16H7M11,16V20H13V16H11M15,16V21H17V16H15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ShredderIcon",
  props: {
    title: {
      type: String,
      default: "Shredder icon"
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
