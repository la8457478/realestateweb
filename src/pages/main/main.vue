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


        <!--<mu-button color="secondary">Secondary</mu-button>-->
        <!--<mu-button color="success">Success</mu-button>-->
        <!--<mu-button color="warning">Warning</mu-button>-->
        <!--<mu-button color="info">Info</mu-button>-->
        <!--<mu-button color="error">Error</mu-button>-->
        <!--<mu-button disabled>disabled</mu-button>-->
        <!--<mu-flex class="flex-wrapper" justify-content="center">-->
            <!--<mu-flex class="flex-demo" justify-content="center" fill="true">-->
                <!--<mu-button color="primary">-->

                    <!--<mu-icon left value="grade"></mu-icon>-->
                   <!--Primary</mu-button>-->
            <!--</mu-flex>-->
        <!--</mu-flex>-->
        <mu-flex class="flex-wrapper" justify-content="center">
            <mu-flex class="flex-demo" justify-content="center" align-items="center"  >
                <mu-flex   align-items="center" color="primary">
                    <img src="/static/img/demo.png" class="flex-img" />
                </mu-flex>
                <mu-flex  justify-content="center"  color="primary" >
                    <mu-button flat color="primary">Primary</mu-button>
                </mu-flex>
            </mu-flex>
            <mu-flex class="flex-demo" justify-content="center" align-items="center"  >
                <mu-flex   align-items="center" color="primary">
                    <img src="/static/img/demo.png" class="flex-img" />
                </mu-flex>
                <mu-flex  justify-content="center"  color="primary" >
                    <mu-button flat color="primary">Primary</mu-button>
                </mu-flex>
            </mu-flex>
        </mu-flex>
        <mu-flex class="flex-wrapper" justify-content="center">
            <mu-flex class="flex-demo" justify-content="center" align-items="center"  >
                <mu-flex   align-items="center" color="primary">
                    <img src="/static/img/demo.png" class="flex-img" />
                </mu-flex>
                <mu-flex  justify-content="center"  color="primary" >
                    <mu-button flat color="primary">Primary</mu-button>
                </mu-flex>
            </mu-flex>
            <mu-flex class="flex-demo" justify-content="center" align-items="center"  >
                <mu-flex   align-items="center" color="primary">
                    <img src="/static/img/demo.png" class="flex-img" />
                </mu-flex>
                <mu-flex  justify-content="center"  color="primary" >
                    <mu-button flat color="primary">Primary</mu-button>
                </mu-flex>
            </mu-flex>
        </mu-flex>
        <!--<mu-grid-list class="gridlist-demo" cols="1">-->
        <!--<mu-sub-header>选择业务</mu-sub-header>-->
        <!--<mu-grid-tile v-for="tile, index in list" :key="index" color="primary">-->
        <!--<img :src="tile.image" >-->
        <!--<span slot="title">{{tile.title}}</span>-->
        <!--<span slot="subTitle">by <b>{{tile.author}}</b></span>-->
        <!--</mu-grid-tile>-->
        <!--</mu-grid-list>-->
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
    import {mapState} from 'vuex'
    import MuButton from "../../components/muse-ui/es5/Button/Button";

    export default {
        components: {MuButton},
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
    .flex-wrapper {
        width: 100%;
        height: 100px;
        margin-top: 15px;
        border-radius: 5px
    }
    .flex-img{
           /*margin-top:10%;*/
        margin-left:10%;

    }

    .flex-demo {
        /*background-image: url(/static/img/demo.png);*/
        background-repeat:no-repeat;
        background-position:10% center;

        border-radius: 5px;
        width: 100%;
        height: 100px;
        background-color: #e0e0e0;
        text-align: center;
        line-height: 32px;
        margin-left: 8px;
    }
</style>
