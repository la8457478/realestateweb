<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon phone-rotate-portrait-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M9,1H3C1.9,1 1,1.9 1,3V16C1,17.1 1.9,18 3,18H4V15H3V3H9V11H11V3C11,1.9 10.1,1 9,1M23,21V15C23,13.9 22.1,13 21,13H8C6.9,13 6,13.9 6,15V21C6,22.1 6.9,23 8,23H21C22.1,23 23,22.1 23,21M9,21V15H21V21H9M23,10H21.5C21.5,7 19.69,4.27 16.92,3.09L16,5L14,1C18.97,1 23,5.03 23,10Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "PhoneRotatePortraitIcon",
  props: {
    title: {
      type: String,
      default: "Phone Rotate Portrait icon"
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
