<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon map-plus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,3L3.36,4.9C3.16,4.97 3,5.15 3,5.38V20.5C3,20.78 3.22,21 3.5,21C3.55,21 3.6,21 3.66,20.97L9,18.9L13.16,20.36C13.06,19.92 13,19.46 13,19C13,18.77 13,18.54 13.04,18.3L9,16.9V5L15,7.1V14.56C16.07,13.6 17.47,13 19,13C19.7,13 20.37,13.13 21,13.36V3.5C21,3.22 20.78,3 20.5,3H20.34L15,5.1L9,3M18,15V18H15V20H18V23H20V20H23V18H20V15H18Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MapPlusIcon",
  props: {
    title: {
      type: String,
      default: "Map Plus icon"
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
