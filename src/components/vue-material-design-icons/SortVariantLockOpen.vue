<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon sort-variant-lock-open-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M3,13V11H15V13H3M3,6H21V8H3V6M3,18V16H9V18H3M22,22H14V18H15V16C15,14.34 16.34,13 18,13C19.66,13 21,14.34 21,16H19C19,15.45 18.55,15 18,15C17.45,15 17,15.45 17,16V18H22V22Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "SortVariantLockOpenIcon",
  props: {
    title: {
      type: String,
      default: "Sort Variant Lock Open icon"
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
