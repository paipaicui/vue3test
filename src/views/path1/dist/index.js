"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
exports["default"] = vue_1.defineComponent(function () {
    var router = vue_router_1.useRouter();
    var answerRef = vue_1.ref();
    var addAnswer = function (item) {
        console.log(item);
    };
    var messageDom = function () { return (React.createElement("div", { onClick: function () { return addAnswer('item'); } }, "this is messageDom")); };
    var answerDom = function () { return (React.createElement("div", null, "this is answerDom")); };
    return function () { return (React.createElement("div", { "class": "pd-nav" },
        messageDom(),
        answerDom())); };
});
