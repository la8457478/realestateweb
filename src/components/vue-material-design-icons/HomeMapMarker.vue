<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon home-map-marker-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10C11.17,10 10.5,10.67 10.5,11.5C10.5,12.33 11.17,13 12,13C12.83,13 13.5,12.33 13.5,11.5C13.5,10.67 12.83,10 12,10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HomeMapMarkerIcon",
  props: {
    title: {
      type: String,
      default: "Home Map Marker icon"
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
