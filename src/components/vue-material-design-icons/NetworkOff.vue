<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon network-off-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M1,5.27L5,9.27V15C5,16.1 5.9,17 7,17H11V19H10C9.45,19 9,19.45 9,20H2V22H9C9,22.55 9.45,23 10,23H14C14.55,23 15,22.55 15,22H17.73L19.73,24L21,22.72L2.28,4L1,5.27M15,20C15,19.45 14.55,19 14,19H13V17.27L15.73,20H15M17.69,16.87L5.13,4.31C5.41,3.55 6.14,3 7,3H17C18.1,3 19,3.9 19,5V15C19,15.86 18.45,16.59 17.69,16.87M22,20V21.18L20.82,20H22Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "NetworkOffIcon",
  props: {
    title: {
      type: String,
      default: "Network Off icon"
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
