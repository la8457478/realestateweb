<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon periscope-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,7C12,8.1 11.1,9 10,9C8.9,9 8,8.1 8,7C7.37,7.84 7,8.87 7,10C7,12.76 9.24,15 12,15C14.76,15 17,12.76 17,10C17,7.24 14.76,5 12,5C11.57,5 11.16,5.05 10.77,5.15C11.5,5.45 12,6.17 12,7M12,2C16.42,2 20,5.58 20,10C20,11.05 19.8,12.04 19.43,12.96C17.89,17.38 13.63,22 12,22C10.37,22 6.11,17.38 4.57,12.96C4.2,12.04 4,11.05 4,10C4,5.58 7.58,2 12,2Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PeriscopeIcon",
  props: {
    title: {
      type: String,
      default: "Periscope icon"
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
