<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pillar-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6,5H18C18.55,5 19,5.45 19,6C19,6.55 18.55,7 18,7H6C5.45,7 5,6.55 5,6C5,5.45 5.45,5 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PillarIcon",
  props: {
    title: {
      type: String,
      default: "Pillar icon"
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
