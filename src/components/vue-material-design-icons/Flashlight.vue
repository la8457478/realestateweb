<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon flashlight-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,10L6,5H18L15,10H9M18,4H6V2H18V4M9,22V11H15V22H9M12,13C11.45,13 11,13.45 11,14C11,14.55 11.45,15 12,15C12.55,15 13,14.55 13,14C13,13.45 12.55,13 12,13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "FlashlightIcon",
  props: {
    title: {
      type: String,
      default: "Flashlight icon"
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
