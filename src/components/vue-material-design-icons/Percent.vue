<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon percent-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M18.5,3.5L3.5,18.5L5.5,20.5L20.5,5.5M7,4C5.34,4 4,5.34 4,7C4,8.66 5.34,10 7,10C8.66,10 10,8.66 10,7C10,5.34 8.66,4 7,4M17,14C15.34,14 14,15.34 14,17C14,18.66 15.34,20 17,20C18.66,20 20,18.66 20,17C20,15.34 18.66,14 17,14Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PercentIcon",
  props: {
    title: {
      type: String,
      default: "Percent icon"
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
