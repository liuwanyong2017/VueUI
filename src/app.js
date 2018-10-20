import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('v-button',Button);
Vue.component('v-icon',Icon);
Vue.component('v-button-group',ButtonGroup);
new Vue({
    el:"#app",
    data : {
        msg:'哈哈哈',
        loading1 : true,
        loading2 : true,
        loading3 : true
    }

});