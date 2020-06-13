let router = input('@/js/plugin/router.js');
let home = '@/views/home/Home.main'
let community = '@/views/community/Community.main'
let shoppingCart = '@/views/shoppingcart/ShoppingCart.main'
let mine = '@/views/mine/Mine.main'
let login = '@/views/login/Login.main'
let routerObj = new router({
    routes: [
        {
            path: '/home',
            component: home
        },
        {
            path: '/community',
            component: community
        },
        {
            path: '/shopping-cart',
            component: shoppingCart
        },
        {
            path: '/mine',
            component: mine
        },
        {
            path: '/login',
            component: login
        }

    ]
});

output = routerObj;