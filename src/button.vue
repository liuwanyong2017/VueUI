<template>
    <button class="v-button">按钮</button>
</template>

<script>
    export default {}

</script>

<style lang="scss">
    .v-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        border-radius: var(--button-radius);
        &:focus {
            outline: none;
        }
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
    }


</style>