<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon rss-box-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M7.5,15C6.67,15 6,15.67 6,16.5C6,17.33 6.67,18 7.5,18C8.33,18 9,17.33 9,16.5C9,15.67 8.33,15 7.5,15M6,10V12C9.31,12 12,14.69 12,18H14C14,13.58 10.42,10 6,10M6,6V8C11.52,8 16,12.48 16,18H18C18,11.37 12.63,6 6,6Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RssBoxIcon",
  props: {
    title: {
      type: String,
      default: "Rss Box icon"
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
