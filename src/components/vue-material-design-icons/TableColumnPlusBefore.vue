<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon table-column-plus-before-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M13,2C11.9,2 11,2.9 11,4V20C11,21.1 11.9,22 13,22H22V2H13M20,10V14H13V10H20M20,16V20H13V16H20M20,4V8H13V4H20M9,11H6V8H4V11H1V13H4V16H6V13H9V11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TableColumnPlusBeforeIcon",
  props: {
    title: {
      type: String,
      default: "Table Column Plus Before icon"
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
