<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon death-star-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2.05,13H21.95C21.45,18.05 17.19,22 12,22C6.82,22 2.55,18.05 2.05,13M21.95,11H2.05C2.55,5.95 6.82,2 12,2C17.18,2 21.45,5.95 21.95,11M12,6.75C12,5.37 10.88,4.25 9.5,4.25C8.12,4.25 7,5.37 7,6.75C7,8.13 8.12,9.25 9.5,9.25C10.88,9.25 12,8.13 12,6.75Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DeathStarIcon",
  props: {
    title: {
      type: String,
      default: "Death Star icon"
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
