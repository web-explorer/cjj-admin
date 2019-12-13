<template>
    <el-container class="home">
        <el-header>
            <top-header></top-header>
        </el-header>
        <el-container>
            <el-aside width="285px">
                <left-nav></left-nav>
            </el-aside>
            <el-main>
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import TopHeader from '@/components/home/top-header.vue'
    import LeftNav from '@//components/home/left-nav.vue'

    export default {
        components: {
            TopHeader,
            LeftNav
        },
        name: "home"
    }
</script>

<style lang="scss" scoped>
    @import "@/common/scss/variable.scss";

    .home {
        min-height: 100%;
        /deep/.el-header {
            padding-left: 0;
            padding-right: 0;
        }
    }
</style>