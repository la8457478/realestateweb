<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon microphone-minus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,2C10.66,2 12,3.34 12,5V11C12,12.66 10.66,14 9,14C7.34,14 6,12.66 6,11V5C6,3.34 7.34,2 9,2M16,11C16,14.5 13.44,17.43 10,17.93V21H8V17.93C4.56,17.43 2,14.5 2,11H4C4,13.76 6.24,16 9,16C11.76,16 14,13.76 14,11H16M15,5H23V7H15V5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "MicrophoneMinusIcon",
  props: {
    title: {
      type: String,
      default: "Microphone Minus icon"
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
