<template>
  <div>hello world</div>
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
import Router from '../../routes/index'
import { ref } from 'vue';
export default {
  computed: {
    key () {
      return '/middle'
    }
  }
};
</script>