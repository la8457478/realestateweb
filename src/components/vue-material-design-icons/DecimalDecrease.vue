<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon decimal-decrease-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M12,17L15,20V18H21V16H15V14L12,17M9,5C10.66,5 12,6.34 12,8V11C12,12.66 10.66,14 9,14C7.34,14 6,12.66 6,11V8C6,6.34 7.34,5 9,5M9,7C8.45,7 8,7.45 8,8V11C8,11.55 8.45,12 9,12C9.55,12 10,11.55 10,11V8C10,7.45 9.55,7 9,7M4,12C4.55,12 5,12.45 5,13C5,13.55 4.55,14 4,14C3.45,14 3,13.55 3,13C3,12.45 3.45,12 4,12Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "DecimalDecreaseIcon",
  props: {
    title: {
      type: String,
      default: "Decimal Decrease icon"
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
