<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon sort-variant-lock-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,13V11H15V13H3M3,6H21V8H3V6M3,18V16H9V18H3M22,22H14V18H15V17C15,15.34 16.34,14 18,14C19.66,14 21,15.34 21,17V18H22V22M18,16C17.45,16 17,16.45 17,17V18H19V17C19,16.45 18.55,16 18,16Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SortVariantLockIcon",
  props: {
    title: {
      type: String,
      default: "Sort Variant Lock icon"
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
