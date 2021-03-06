/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import router from './router'
import i18n from './i18n'
import store from './store/index'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/**
 * hmm This component use to real time edit text in line
 * idea like jQuery.editable use html attributes contenteditable
 * register here
 * use everywhere (thatlatuyetvoi) 
 */
Vue.component("editable", {
    template: '<div contenteditable="true" @input="update"></div>',
    props: ["content"],
    mounted: function () {
        this.$el.innerText = this.content;
    },
    methods: {
        update: function (event) {
            this.$emit("update", event.target.innerText);
        }
    }
});

const app = new Vue({
    el: '#app',
    router,
    i18n,
    store
});
