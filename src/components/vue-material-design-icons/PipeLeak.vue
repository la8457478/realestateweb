<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon pipe-leak-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,5V13H4V11H10L12,9L10,7H4V5H2M20,5V7H12L14,9L12,11H20V13H22V5H20M12,13C12,13 10,15.17 10,16.5C10,17.6 10.9,18.5 12,18.5C13.1,18.5 14,17.6 14,16.5C14,15.17 12,13 12,13Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PipeLeakIcon",
  props: {
    title: {
      type: String,
      default: "Pipe Leak icon"
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
