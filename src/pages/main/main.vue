<template>
    <view class="content">
            <mu-appbar v-if="hasLogin" style="width: 100%;" >
                <mu-breadcrumbs slot="left" divider="≡">
                    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
                </mu-breadcrumbs>
                <mu-button icon slot="right" @click="goToUser">
                    <mu-icon value="account_box" ></mu-icon>
                </mu-button>
            </mu-appbar>

            <mu-grid-list class="gridlist-demo" cols="4">
                <mu-grid-tile v-for="tile, index in list" :key="index">
                    <span slot="title">{{tile.title}}</span>
                    <span slot="subTitle">by <b>{{tile.author}}</b></span>
                    <mu-button slot="action" icon>
                        <mu-icon value="star_border"></mu-icon>
                    </mu-button>
                </mu-grid-tile>
            </mu-grid-list>
        <!--<view v-if="hasLogin" class="hello">-->
            <!--<view class="title">-->
                <!--您好 {{userName}}，您已成功登录。-->
            <!--</view>-->
            <!--<view class="ul">-->
                <!--<view>这是 uni-app 带登录模板的示例App首页。</view>-->
                <!--<view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>-->
            <!--</view>-->
        <!--&lt;!&ndash;</view>&ndash;&gt;-->
        <!--<view v-if="!hasLogin" class="hello">-->
            <!--<view class="title">-->
                <!--您好 游客。-->
            <!--</view>-->
            <!--<view class="ul">-->
                <!--<view>这是 uni-app 带登录模板的示例App首页。</view>-->
                <!--<view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>-->
            <!--</view>-->
        <!--</view>-->
    </view>
</template>

<script>
    import {
        mapState
    } from 'vuex'

    export default {
        computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
        data(){
            return{
                list: [{
                    title: 'Breakfast',
                    author: 'Myron'
                }, {
                    title: 'Burger',
                    author: 'Linyu'
                }, {
                    title: 'Camera',
                    author: 'ruolin'
                }, {
                    title: 'Hats',
                    author: 'kakali'
                }, {
                    title: 'Honey',
                    author: 'yuyang'
                }, {
                    title: 'Morning',
                    author: 'mokayi'
                }, {
                    title: 'Vegetables',
                    author: 'NUyyyyyyy'
                }, {
                    title: 'water',
                    author: 'TDDyyyyyyy'
                }],
                items: [
                    {
                        text: '四川省',
                        disabled: false
                    },
                    {
                        text: '成都市',
                        disabled: false
                    },
                    {
                        text: '我的项目',
                        disabled: false
                    }
                ]
            }
        },
        onLoad() {
            if (!this.hasLogin) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    /**
                     * 如果需要强制登录，不显示取消按钮
                     */
                    showCancel: !this.forcedLogin,
                    success: (res) => {
                        if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
                            if (this.forcedLogin) {
                                uni.reLaunch({
                                    url: '../login/login'
                                });
                            } else {
                                uni.navigateTo({
                                    url: '../login/login'
                                });
                            }
                        }
                    }
                });
            }

        }
    }
</script>

<style>
</style>
