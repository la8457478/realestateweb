<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon code-less-than-or-equal-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,13H18V15H13M13,9H18V11H13M10.09,7.41L11.5,8.82L8.32,12L11.5,15.18L10.09,16.6L5.5,12M5,3C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3H5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "CodeLessThanOrEqualIcon",
  props: {
    title: {
      type: String,
      default: "Code Less Than Or Equal icon"
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
