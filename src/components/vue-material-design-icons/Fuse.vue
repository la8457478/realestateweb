<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon fuse-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M8,7V17H15V7H8M11.16,16V12.87H9.41L11.91,8V11.14H13.59L11.16,16M16,2V6H7V2C7,1.45 7.45,1 8,1H15C15.55,1 16,1.45 16,2M16,18V22C16,22.55 15.55,23 15,23H8C7.45,23 7,22.55 7,22V18H16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FuseIcon",
  props: {
    title: {
      type: String,
      default: "Fuse icon"
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
