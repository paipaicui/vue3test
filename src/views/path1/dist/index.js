"use strict";
exports.__esModule = true;
// import { defineComponent, ref, reactive, nextTick, onMounted, onUnmounted } from "vue";
// import { useRouter } from "vue-router";
var vue_1 = require("vue");
exports["default"] = vue_1.defineComponent({
    name: 'this',
    setup: function () {
        // const router = useRouter()
        // const answerRef = ref()
        var addAnswer = function (item) {
            console.log(item);
        };
        var title = vue_1.ref('title');
        var decLiteral = vue_1.ref(6);
        var messageDom = function () { return (React.createElement("div", { onClick: function () { return addAnswer('item'); } }, "this is messageDom")); };
        var answerDom = function () { return (React.createElement("div", null,
            title.value,
            " this is answerDom ",
            decLiteral.value)); };
        vue_1.onMounted(function () {
            console.log('mounted');
        });
        return function () { return (React.createElement("div", { "class": "pd-nav" },
            messageDom(),
            answerDom())); };
    }
});
