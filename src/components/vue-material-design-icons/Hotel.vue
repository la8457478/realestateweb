<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon hotel-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M19,7H11V14H3V5H1V20H3V17H21V20H23V11C23,8.79 21.21,7 19,7M7,13C8.66,13 10,11.66 10,10C10,8.34 8.66,7 7,7C5.34,7 4,8.34 4,10C4,11.66 5.34,13 7,13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HotelIcon",
  props: {
    title: {
      type: String,
      default: "Hotel icon"
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
