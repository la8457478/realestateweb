<template>
  <span :aria-hidden="decorative"
        :aria-label="title"
        class="material-design-icon treasure-chest-icon"
        role="img">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         width="24"
         height="24"
         viewBox="0 0 24 24">
      <path d="M5,4H19C20.66,4 22,5.34 22,7V11H15V10H9V11H2V7C2,5.34 3.34,4 5,4M11,11H13V13H11V11M2,12H9V13L11,15H13L15,13V12H22V20H2V12Z">
        <title>{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "TreasureChestIcon",
  props: {
    title: {
      type: String,
      default: "Treasure Chest icon"
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
