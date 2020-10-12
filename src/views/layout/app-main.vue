<template>
  <div>hello world</div>
  <router-view key='key' v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
import { defineComponent, reactive, toRefs, watch } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: 'app-main',
  setup () {
    const route = useRoute()
    console.log(route)

    return {
      route
    }
  }
})
</script>