<template>
    <div class="left-nav">
        <div class="left-nav-first">
            <div v-for="(firstNav, index) in navList" @click="selectFirstNav(index)" class="left-nav-first-item" :class="{'active': firstNavIndex == index}">
                <svg class="icon left-nav-first-item-icon" aria-hidden="true">
                    <use :xlink:href="firstNav.icon"></use>
                </svg>
                <div class="left-nav-first-item-text">{{firstNav.name}}</div>
            </div>
        </div>
        <div class="left-nav-second">
            <el-menu @select="selectMenuItem" :default-active="currentPath" :router="true" ref="elMenu">
                <template v-for="secondNav in elMenuList">
                    <el-submenu v-if="secondNav.children" :index="secondNav.name">
                        <template slot="title">
                            <span>{{secondNav.name}}</span>
                        </template>
                        <el-menu-item v-for="(thirdNav, thirdIndex) in secondNav.children" :index="`${thirdNav.path}`" :key="thirdIndex">
                            <span slot="title">{{thirdNav.name}}</span>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item v-else :index="secondNav.path">
                        <span slot="title">{{secondNav.name}}</span>
                    </el-menu-item>
                </template>
                <!--<el-submenu index="1-1">
                    <template slot="title">
                        <span>导航一</span>
                    </template>
                    <el-menu-item index="1-1-1">
                        <span slot="title">导航一/1</span>
                    </el-menu-item>
                    <el-menu-item index="1-1-2">
                        <span slot="title">导航一/2</span>
                    </el-menu-item>
                    <el-menu-item index="1-1-3">
                        <span slot="title">导航一/3</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="1-2">
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="1-3">
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="1-4">
                    <span slot="title">导航四</span>
                </el-menu-item>-->
            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstNavIndex: 0,
                navList: [
                    // 控制台
                    {
                        name: '控制台',
                        icon: '#icon-settings-1',
                        children: [
                            {
                                name: '欢迎页面',
                                path: '/home/control-panel/welcome'
                            },
                            {
                                name: '站点设置',
                                path: '/home/control-panel/website-setting'
                            },
                            {
                                name: '会员管理',
                                path: '/home/control-panel/member-management'
                            },
                            {
                                name: '店铺管理',
                                path: '/home/control-panel/shop-management'
                            },
                            {
                                name: '商品管理',
                                path: '/home/control-panel/goods-management'
                            },
                            {
                                name: '订单管理',
                                path: '/home/control-panel/order-management'
                            },
                            {
                                name: '首页配置',
                                path: '/home/control-panel/home-page-configuration'
                            }
                        ]
                    },
                    // 微信
                    {
                        name: '微信',
                        icon: '#icon-phone-1',
                        children: [
                            {
                                name: '消息管理',
                                path: '/home/wechat/message-management'
                            },
                            {
                                name: '回复管理',
                                basePath: '/home/wechat/response-management',
                                children: [
                                    {
                                        name: '关键词回复',
                                        path: '/home/wechat/response-management/keyword-response'
                                    },
                                    {
                                        name: '关注回复列表',
                                        path: '/home/wechat/response-management/attention-response-list'
                                    },
                                    {
                                        name: '自动回复',
                                        path: '/home/wechat/response-management/auto-response'
                                    }
                                ]
                            },
                            {
                                name: '用户管理',
                                basePath: '/home/wechat/user-management',
                                children: [
                                    {
                                        name: '全部用户',
                                        path: '/home/wechat/user-management/all-user'
                                    },
                                    {
                                        name: '平台用户',
                                        path: '/home/wechat/user-management/platform-user'
                                    }
                                ]
                            },
                            {
                                name: '菜单管理',
                                basePath: '/home/wechat/menu-management',
                                children: [
                                    {
                                        name: '菜单管理',
                                        path: '/home/wechat/menu-management/menu-management'
                                    }
                                ]
                            },
                            {
                                name: '群发消息',
                                basePath: '/home/wechat/group-sending-message',
                                children: [
                                    {
                                        name: '群发消息',
                                        path: '/home/wechat/group-sending-message'
                                    }
                                ]
                            },
                            {
                                name: '微信配置',
                                basePath: '/home/wechat/wechat-configuration',
                                children: [
                                    {
                                        name: '微信配置',
                                        path: '/home/wechat/wechat-configuration'
                                    },
                                    {
                                        name: '场景值二维码',
                                        path: '/home/wechat/wechat-configuration/scene-value-qr-code'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        computed: {
            currentPath() {
                if(this.$refs.elMenu && !this.$refs.elMenu.activeIndex){
                    this.$refs.elMenu.activeIndex = this.$route.path
                }
                return this.$route.path
            },
            elMenuList() {
                if(this.$refs.elMenu && !this.$refs.elMenu.activeIndex){
                    this.$refs.elMenu.activeIndex = this.$route.path
                }
                return this.navList[this.firstNavIndex].children
            }
        },
        methods: {
            selectMenuItem(index, route) {

            },
            selectFirstNav(index) {
                this.firstNavIndex = index
            }
        },
        mounted() {

        },
        name: "left-nav"
    }
</script>

<style lang="scss" scoped>
    @import "@/common/scss/variable.scss";

    .left-nav {
        height: 100%;
        display: flex;
        align-items: stretch;
        &-first {
            width: 80px;
            background-color: $color-background-dark-d;
            padding: 20px 10px;
            &-item {
                text-align: center;
                /deep/.icon {
                    width: 30px;
                    height: 30px;
                    fill: #8191AD;
                }
                &-text {
                    margin-top: 5px;
                    color: #8191AD;
                    font-size: $font-size-medium-m;
                }
            }
            &-item:hover {
                cursor: pointer;
                /deep/.icon {
                    fill: #fff;
                }
                .left-nav-first-item-text {
                    color: #fff;
                }
            }
            &-item+&-item {
                margin-top: 20px;
            }
            &-item.active {
                /deep/.icon {
                    fill: #fff;
                }
                .left-nav-first-item-text {
                    color: #fff;
                }
            }
        }
        &-second {
            flex: auto;
            background-color: $color-background-dark;
            /deep/.el-menu {
                background-color: transparent;
                border-right: none;
                .el-submenu {
                    .el-submenu__title {
                        color: #fff;
                        i {
                            color: #fff;
                        }
                    }
                    .el-submenu__title:hover {
                        background-color: $color-background-dark-dd;
                    }
                }
                .el-menu-item {
                    color: #fff;
                }
                .el-menu-item.is-active {
                    background-color: $color-background-dark-dd;
                }
                .el-menu-item:hover {
                    background-color: $color-background-dark-dd;
                }
            }
        }
    }
</style>