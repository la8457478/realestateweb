<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon table-column-plus-after-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M11,2C12.1,2 13,2.9 13,4V20C13,21.1 12.1,22 11,22H2V2H11M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M15,11H18V8H20V11H23V13H20V16H18V13H15V11Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TableColumnPlusAfterIcon",
  props: {
    title: {
      type: String,
      default: "Table Column Plus After icon"
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
