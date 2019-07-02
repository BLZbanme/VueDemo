Vue.component("pane", {
    template: `
        <div
        v-show="show">
            <slot></slot>
        </div>
    `,
    props: {
        name: {
            type: String
        },
        label: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            show: true
        }
    },
    mounted() {
        this.updateNav();
    },
    methods: {
        updateNav() {
            this.$parent.updatedPaneLists();
        }
    },
    watch: {
        label() {
            this.updateNav();
        }
    }
})