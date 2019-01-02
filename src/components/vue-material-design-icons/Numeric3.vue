<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon numeric3-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,15V13.5C15,12.67 14.33,12 13.5,12C14.33,12 15,11.33 15,10.5V9C15,7.89 14.1,7 13,7H9V9H13V11H11V13H13V15H9V17H13C14.1,17 15,16.1 15,15">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "Numeric3Icon",
  props: {
    title: {
      type: String,
      default: "Numeric3 icon"
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
