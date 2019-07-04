<template>
    <button
    @click="handleClick" :style="styles">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        props: {
            title: {
                type: String
            }
        },
        computed: {
            styles() {
                return {
                    background: this.color
                }
            }
        },
        methods: {
            handleClick(e) {
                this.$emit("click", e);
            }
        }
    }
</script>
<style>
    button {
        border: 0;
        outline: none;
        color: #fff;
        padding: 4px 8px;
    }
    button:active {
        position: relative;
        top: 1px;
        left: 1px;
    }
</style>

<style>
    h1 a {
        color: #3399ff;
        font-size: 24px;
    }
</style>
