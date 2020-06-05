//优先注册路径插件
let path = input('path/index.js');
Main.use(path);

//注册路由插件
let router = input('router/index.js');
Main.use(router);

let myTabBar = input('component/content/tabbar/MyTabbar.main')

new Main({
    el: '#app',
    template:`
        <div style="width: 100%;">
            <router-view></router-view>
            <tab-bar @selected="tabbarClick"></tab-bar>
        </div>
    `,
    data: {
        showIndex: 0
    },
    components:{
        tabBar: myTabBar,
    },
    mounted: function(){

    },
    methods: {
        tabbarClick: function (s) {
            switch(s){
                case '首页':
                    this.$router.goPath('/ds/index.html')
                    break;
                case '社区':
                    this.$router.goPath('/community')
                    break;
                case '购物车':
                    this.$router.goPath('/shopping-cart')
                    break;
                case '我的':
                    this.$router.goPath('/mine')
                    break;
            }
        }
    }
});