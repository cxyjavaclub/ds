let router = input('@/js/plugin/router.js');
let home = '@/views/home/Home.main'
let community = '@/views/community/Community.main'
let shoppingCart = '@/views/shoppingcart/ShoppingCart.main'
let mine = '@/views/mine/Mine.main'
let routerObj = new router({
    routes: [
        {
            path: '/ds/index.html',
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
        }
    ]
});

output = routerObj;