<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon ribbon-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13.41,19.31L16.59,22.5L18,21.07L14.83,17.9M15.54,11.53H15.53L12,15.07L8.47,11.53H8.46V11.53C7.56,10.63 7,9.38 7,8C7,5.24 9.24,3 12,3C14.76,3 17,5.24 17,8C17,9.38 16.44,10.63 15.54,11.53M16.9,13C18.2,11.73 19,9.96 19,8C19,4.13 15.87,1 12,1C8.13,1 5,4.13 5,8C5,9.96 5.81,11.73 7.1,13V13L10.59,16.5L6,21.07L7.41,22.5L16.9,13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "RibbonIcon",
  props: {
    title: {
      type: String,
      default: "Ribbon icon"
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
