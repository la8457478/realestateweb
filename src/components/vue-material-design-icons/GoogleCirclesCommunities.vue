<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon google-circles-communities-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15,12C13.89,12 13,12.89 13,14C13,15.1 13.9,16 15,16C16.1,16 17,15.1 17,14C17,12.89 16.1,12 15,12M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M14,9C14,7.89 13.1,7 12,7C10.89,7 10,7.89 10,9C10,10.1 10.9,11 12,11C13.1,11 14,10.1 14,9M9,12C7.9,12 7,12.9 7,14C7,15.1 7.9,16 9,16C10.1,16 11,15.1 11,14C11,12.89 10.1,12 9,12Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "GoogleCirclesCommunitiesIcon",
  props: {
    title: {
      type: String,
      default: "Google Circles Communities icon"
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
