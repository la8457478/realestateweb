<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon resistor-nodes-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M2,11H3.67C4.08,9.83 5.19,9 6.5,9C8.16,9 9.5,10.34 9.5,12C9.5,12.65 9.29,13.25 8.94,13.74L10.07,15.35L13.11,4L14.61,6.13L16.7,9.11L17.5,9C18.81,9 19.92,9.83 20.33,11H22V13H20.33C19.92,14.17 18.81,15 17.5,15C15.84,15 14.5,13.66 14.5,12C14.5,11.35 14.71,10.75 15.06,10.26L13.93,8.65L10.89,20L7.3,14.89C7.05,14.96 6.78,15 6.5,15C5.19,15 4.08,14.17 3.67,13H2V11M17.5,10.5C16.67,10.5 16,11.17 16,12C16,12.83 16.67,13.5 17.5,13.5C18.33,13.5 19,12.83 19,12C19,11.17 18.33,10.5 17.5,10.5M6.5,10.5C5.67,10.5 5,11.17 5,12C5,12.83 5.67,13.5 6.5,13.5C7.33,13.5 8,12.83 8,12C8,11.17 7.33,10.5 6.5,10.5Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "ResistorNodesIcon",
  props: {
    title: {
      type: String,
      default: "Resistor Nodes icon"
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
