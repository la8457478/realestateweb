<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon skull-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,2C7.03,2 3,6.03 3,11C3,14.03 4.53,16.82 7,18.47V22H9V19H11V22H13V19H15V22H17V18.46C19.47,16.81 21,14 21,11C21,6.03 16.97,2 12,2M8,11C9.1,11 10,11.9 10,13C10,14.1 9.1,15 8,15C6.9,15 6,14.1 6,13C6,11.9 6.9,11 8,11M16,11C17.1,11 18,11.9 18,13C18,14.1 17.1,15 16,15C14.9,15 14,14.1 14,13C14,11.9 14.9,11 16,11M12,14L13.5,17H10.5L12,14Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SkullIcon",
  props: {
    title: {
      type: String,
      default: "Skull icon"
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
