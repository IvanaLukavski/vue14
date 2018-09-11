// childcomponent.vue
<template>
  <div class="child-component">
    <datepicker v-on:selected="doSomethingInParentComponentFunction">ddd</datepicker>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  },
  methods: {
    doSomethingInParentComponentFunction (selectedDate) {
      this.$emit("selected", selectedDate)
    }
  }
}
</script>
