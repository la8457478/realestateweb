<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon format-list-bulleted-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5C4.83,4.5 5.5,5.17 5.5,6C5.5,6.83 4.83,7.5 4,7.5C3.17,7.5 2.5,6.83 2.5,6C2.5,5.17 3.17,4.5 4,4.5M4,10.5C4.83,10.5 5.5,11.17 5.5,12C5.5,12.83 4.83,13.5 4,13.5C3.17,13.5 2.5,12.83 2.5,12C2.5,11.17 3.17,10.5 4,10.5M7,19V17H21V19H7M4,16.5C4.83,16.5 5.5,17.17 5.5,18C5.5,18.83 4.83,19.5 4,19.5C3.17,19.5 2.5,18.83 2.5,18C2.5,17.17 3.17,16.5 4,16.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FormatListBulletedIcon",
  props: {
    title: {
      type: String,
      default: "Format List Bulleted icon"
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
