<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon shopping-music-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,3C10.34,3 9,4.34 9,6H15C15,4.34 13.66,3 12,3M19,6C20.1,6 21,6.9 21,8V20C21,21.1 20.1,22 19,22H5C3.89,22 3,21.1 3,20V8C3,6.89 3.89,6 5,6H7C7,3.24 9.24,1 12,1C14.76,1 17,3.24 17,6H19M9,19L16.5,14L9,10V19Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ShoppingMusicIcon",
  props: {
    title: {
      type: String,
      default: "Shopping Music icon"
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
