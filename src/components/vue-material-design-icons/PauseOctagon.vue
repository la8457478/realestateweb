<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pause-octagon-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M15.73,3L21,8.27V15.73L15.73,21H8.27L3,15.73V8.27L8.27,3H15.73M15,16V8H13V16H15M11,16V8H9V16H11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PauseOctagonIcon",
  props: {
    title: {
      type: String,
      default: "Pause Octagon icon"
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
