<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon key-change-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6.5,2C8.46,2 10.13,3.25 10.74,5H22V8H18V11H15V8H10.74C10.13,9.75 8.46,11 6.5,11C4,11 2,9 2,6.5C2,4 4,2 6.5,2M6.5,5C5.67,5 5,5.67 5,6.5C5,7.33 5.67,8 6.5,8C7.33,8 8,7.33 8,6.5C8,5.67 7.33,5 6.5,5M6.5,13C8.46,13 10.13,14.25 10.74,16H22V19H20V22H18V19H16V22H13V19H10.74C10.13,20.75 8.46,22 6.5,22C4,22 2,20 2,17.5C2,15 4,13 6.5,13M6.5,16C5.67,16 5,16.67 5,17.5C5,18.33 5.67,19 6.5,19C7.33,19 8,18.33 8,17.5C8,16.67 7.33,16 6.5,16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "KeyChangeIcon",
  props: {
    title: {
      type: String,
      default: "Key Change icon"
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
