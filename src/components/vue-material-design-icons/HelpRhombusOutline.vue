<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon help-rhombus-outline-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M21.5,10.8L13.2,2.5C12.5,1.8 11.5,1.8 10.8,2.5L2.5,10.8C1.8,11.5 1.8,12.5 2.5,13.2L10.8,21.5C11.5,22.2 12.5,22.2 13.2,21.5L21.5,13.2C22.1,12.5 22.1,11.5 21.5,10.8M20.3,12L12,20.3L3.7,12L12,3.7L20.3,12M11,15.5H12.5V17H11V15.5M12,6.95C14.7,7.06 15.87,9.78 14.28,11.81C13.86,12.31 13.19,12.64 12.85,13.07C12.5,13.5 12.5,14 12.5,14.5H11C11,13.65 11,12.94 11.35,12.44C11.68,11.94 12.35,11.64 12.77,11.31C14,10.18 13.68,8.59 12,8.46C11.18,8.46 10.5,9.13 10.5,9.97H9C9,8.3 10.35,6.95 12,6.95Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HelpRhombusOutlineIcon",
  props: {
    title: {
      type: String,
      default: "Help Rhombus Outline icon"
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
