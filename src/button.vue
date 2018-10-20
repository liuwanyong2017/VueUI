<template>
    <button class="v-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <v-icon v-if="icon && !loading" :name="icon" class="icon"></v-icon>
        <v-icon v-if="loading" name="loading" class="icon loading"></v-icon>
        <div class="content">
            <slot></slot>
        </div>

    </button>
</template>

<script>
    export default {
       // props: ['icon','icon-position']
        props : {
            icon : {} ,
            loading : {
                type : Boolean,
                default : false
            },
            iconPosition : {
                type : String,
                default : 'left',
                validator(value){
                    return value === 'left' || value === 'right'
                }
            }
        }
    }

</script>

<style lang="scss">
    .v-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        border-radius: var(--button-radius);
        display:inline-flex;justify-content:center;align-items:center;
        &:focus {
            outline: none;
        }
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        > .icon {order : 1;margin-right:.3em;}
        > .content {order : 2;}
        &.icon-right {
            > .icon {order: 2;margin-left:.3em;margin-right:0;}
            > .content {order:1;}
        }
        vertical-align : middle;
        @keyframes loading {
            0% {
                 transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        .loading {
            animation: loading 1.5s infinite linear;
        }

    }


</style>