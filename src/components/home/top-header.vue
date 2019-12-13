<template>
    <div class="top-header">
        <div class="page-desc">
            <img class="page-desc-img" src="./img/shopnc_logo.png">
            <div class="page-desc-text">
                <div class="page-desc-text-chinese">运营管理平台</div>
                <div class="page-desc-text-english">Operation Management Platform</div>
            </div>
        </div>
        <div class="user-info">
            <img class="user-info-img" src="">
            <ul class="user-info-options">
                <li class="user-info-options-item">
                    <router-link class="user-info-options-item-operation" to="/sign-in" tag="div">退出</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "top-header"
    }
</script>

<style lang="scss" scoped>
    @import "@/common/scss/variable.scss";

    .top-header {
        height: 100%;
        background-color: $color-background-dark-dd;
        padding-left: 20px;
        padding-right: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .page-desc {
            display: flex;
            align-items: center;
            &-img {
                width: 120px;
                height: 50px;
                margin-right: 10px;
            }
            &-text {
                color: #fff;
                text-align-last: justify;
                -moz-text-align-last: right;
                &-chinese {
                    font-size: $font-size-large-l;
                    font-weight: bold;
                }
                &-english {
                    font-size: $font-size-small-ss;
                }
            }
        }
        .user-info {
            position: relative;
            &-img {
                width: 50px;
                height: 50px;
                display: block;
            }
            &-options {
                background-color: #fff;
                list-style-type: none;
                padding-left: 0;
                margin-top: 0;
                margin-bottom: 0;
                position: absolute;
                left: 0;
                top: 100%;
                display: none;
                &-item {
                    min-width: 50px;
                    padding: 6px;
                    &-operation {
                        cursor: pointer;
                    }
                }
            }
            &:hover {
                .user-info-options {
                    display: block;
                }
            }
        }
    }
</style>