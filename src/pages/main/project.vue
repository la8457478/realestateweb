<template>
    <view class="content">
        <mu-form>
            <mu-flex class="flex-demo" justify-content="center" >
                <mu-select label="Tags Input" v-model="tags" multiple tags>
                    <mu-option v-for="language,index in languages" :key="language" :label="language" :value="language"></mu-option>
                </mu-select>
                <!--<mu-text-field v-model="province" label="省份" label-float-->
                               <!--icon="account_circle"></mu-text-field>-->
            </mu-flex>

            <br/>
            <mu-flex class="flex-demo" justify-content="center" >
                <mu-select label="Tags Input" v-model="tags" multiple tags>
                    <mu-option v-for="language,index in languages" :key="language" :label="language" :value="language"></mu-option>
                </mu-select>
                <!--<mu-text-field v-model="city" label="城市" label-float icon="locked"></mu-text-field>-->
                <br/>
            </mu-flex>
            <mu-flex class="flex-demo" justify-content="center" >
                <mu-select label="Tags Input" v-model="tags" multiple tags>
                    <mu-option v-for="language,index in languages" :key="language" :label="language" :value="language"></mu-option>
                </mu-select>
                <!--<mu-text-field v-model="city" label="项目" label-float icon="locked"></mu-text-field>-->
                <br/>
            </mu-flex>
            <!--<mu-form-item align="center">-->
            <!--</mu-form-item>-->
            <mu-flex class="flex-demo" justify-content="center" >

                <mu-button color="primary" align="center" @tap="bindLogin" @click="bindLogin">登陆</mu-button>

            </mu-flex>
        </mu-form>

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
    .demo-paper {
        margin: 10px 5px;

        border-radius: 5px
    }
    .flex-wrapper {
        width: 100%;
        height: 100px;
        margin-top: 5px;
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
        height: 100%;
        background-color: #e0e0e0;
        text-align: center;
        line-height: 32px;
        margin: 0 5px;
    }
</style>
