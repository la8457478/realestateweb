<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon visual-studio-code-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3.29,7.77L4.42,7.38L7.19,9.47L11.8,4.88L14.5,6.1L14.54,14.96L11.78,16.17L7.18,11.62L4.42,13.71L3.29,13.33L6.06,10.57L3.29,7.77M8.63,10.56L11.77,12.89V8.19L8.63,10.56M17,19.17V2.03L22,4.1V19.9L16.91,22L2,16.92L17,19.17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "VisualStudioCodeIcon",
  props: {
    title: {
      type: String,
      default: "Visual Studio Code icon"
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
