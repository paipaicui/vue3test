"use strict";
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var Home_vue_1 = require("@/views/Home.vue");
var routes = [
    {
        path: '/',
        name: 'Home',
        component: Home_vue_1["default"]
    },
    {
        path: '/path1',
        name: 'Path1',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "about" */ '../views/path1/index'); }); }
    }
];
//createWebHashHistory() 哈希
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHistory(process.env.BASE_URL),
    //createWebHashHistory()
    //createWebHistory(process.env.BASE_URL) 历史
    routes: routes
});
exports["default"] = router;
