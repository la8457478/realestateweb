<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon key-minus-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M6.5,3C8.46,3 10.13,4.25 10.74,6H22V9H18V12H15V9H10.74C10.13,10.75 8.46,12 6.5,12C4,12 2,10 2,7.5C2,5 4,3 6.5,3M6.5,6C5.67,6 5,6.67 5,7.5C5,8.33 5.67,9 6.5,9C7.33,9 8,8.33 8,7.5C8,6.67 7.33,6 6.5,6M8,17H16V19H8V17Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "KeyMinusIcon",
  props: {
    title: {
      type: String,
      default: "Key Minus icon"
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
