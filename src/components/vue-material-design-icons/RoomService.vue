<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon room-service-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,17H22V19H2V17M13.84,7.79C13.94,7.54 14,7.27 14,7C14,5.9 13.1,5 12,5C10.9,5 10,5.9 10,7C10,7.27 10.06,7.54 10.16,7.79C6.2,8.61 3.27,11.97 3,16H21C20.73,11.97 17.8,8.61 13.84,7.79Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RoomServiceIcon",
  props: {
    title: {
      type: String,
      default: "Room Service icon"
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
