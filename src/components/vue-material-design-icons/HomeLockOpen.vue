<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon home-lock-open-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8C13.66,8 15,9.34 15,11H13C13,10.45 12.55,10 12,10C11.45,10 11,10.45 11,11V13H16V17H8V13H9V11C9,9.34 10.34,8 12,8Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "HomeLockOpenIcon",
  props: {
    title: {
      type: String,
      default: "Home Lock Open icon"
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
