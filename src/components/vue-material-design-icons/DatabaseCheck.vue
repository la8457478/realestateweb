<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon database-check-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,17.7V20.71C12.05,20.9 11.03,21 10,21C5.58,21 2,19.21 2,17V14C2,16.21 5.58,18 10,18C11.03,18 12.05,17.9 13,17.7M2,9C2,11.21 5.58,13 10,13C14.42,13 18,11.21 18,9V12C18,14.21 14.42,16 10,16C5.58,16 2,14.21 2,12V9M10,3C14.42,3 18,4.79 18,7C18,9.21 14.42,11 10,11C5.58,11 2,9.21 2,7C2,4.79 5.58,3 10,3M23.5,17L18.5,22L15,18.5L16.5,17L18.5,19L22,15.5L23.5,17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DatabaseCheckIcon",
  props: {
    title: {
      type: String,
      default: "Database Check icon"
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
