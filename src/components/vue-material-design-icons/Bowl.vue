<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon bowl-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M22,15C22,18.87 18.87,22 15,22H9C5.13,22 2,18.87 2,15V12H15.58L20.3,4.44L22,5.5L17.94,12H22V15Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BowlIcon",
  props: {
    title: {
      type: String,
      default: "Bowl icon"
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
