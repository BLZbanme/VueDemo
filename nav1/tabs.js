Vue.component("tabs", {
    template: `
        <div class="tabs">
            <div class="tabs-bar">
                <div
                :class="tabCls(item)"
                v-for="(item, index) of paneLists"
                @click="handleChange(index)">
                {{ item.label }}
                </div>
            </div>
            <div class="tabs-content">
                <slot></slot>
            </div>
        </div>
    `,
    props: {
        value: {
            type: [String, Number]
        }
    },
    data() {
        return {
            currentValue: this.value,
            paneLists: []
        }
    },
    methods: {
        tabCls(item) {
            return [
                "tabs-tab"
                ,
                {
                    'tabs-tab-active': item.name === this.currentValue
                }
            ]
        },
        updatedPaneLists() {
            this.paneLists = [];
            this.getPanes().forEach((item, index) => {
                this.paneLists.push({
                    label: item.label,
                    name: item.name || index
                })
                if(!item.name){
                    item.name = index;
                }
                if(index === 0){
                    if(!this.currentValue){
                        this.currentValue = item.name || index;
                    }
                }
            });
            
            this.updateStatus();
        },
        getPanes() {
            return this.$children.filter(item => {
                return item.$options.name === "pane";
            })
        },
        handleChange(index) {
            var name = this.paneLists[index].name;
            if(name != this.currentValue){
                this.currentValue = name;
                this.$emit("input", name);
                this.$emit("on-click", name);
            }
        },
        updateStatus() {
            this.getPanes().forEach(item => {
                return item.show = item.name == this.currentValue;
            })
        }
    },
    watch: {
        value(val) {
            this.currentValue = val;
        },
        currentValue() {
            this.updateStatus();
        }
    }
})