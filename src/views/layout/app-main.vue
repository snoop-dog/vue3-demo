<template>
  <a-layout class="layout-container">
    <a-layout-header class="layout-header">
      <tag-view></tag-view>
    </a-layout-header>
    <a-layout-content class="layout-content">
      <a-layout-sider class="layout-sider">
        <slide-bar></slide-bar>
      </a-layout-sider>
      <a-layout class="main-container">
        <router-view :key="route.fullPath" v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </a-layout>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { defineComponent, reactive, toRefs, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import slideBar from '/@/views/layout/slide-bar.jsx';
import tagView from '/@/views/layout/tag-view.jsx';
export default defineComponent({
  name: 'app-main',
  components: {
    slideBar,
    tagView
  },
  setup() {
    const route = useRoute();
    console.log(route);

    return {
      route,
    };
  },
});
</script>

<style lang="scss" scoped>
  .layout-container {
    &.ant-layout {
      flex-direction: column;
      .layout-content {
        display: flex;
      }
    }
    .layout-header {
      height: 57px;
    }
  }
</style>
