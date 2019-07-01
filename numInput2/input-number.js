Vue.component("numberInput", {
    template: `
        <p>
            <input type="number" :value="currentValue" @change="handleChange"/>
            <button @click="handleDel" :disabled='currentValue <= min'>-</button>
            <button @click="handleAdd" :disabled='currentValue >= max'>+</button>
        </p>
    `,
    props: {
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type: Number,
            default: 0
        }
    },
    data(){
        return {
            currentValue: this.value
        }
    },
    watch: {
        currentValue(val){
            this.$emit("input", val);
            this.$emit("on-change", val);
        },
        value(val){
            this.updateValue(val);
        }
    },
    methods: {
        updateValue(val){
            if(val > this.max){
                val = this.max
            }
            if(val < this.min){
                val = this.min
            }
            this.currentValue = val;
        },
        handleChange(event){
            var val = event.target.value.trim();
            if(val > this.max){
                this.currentValue = this.max;
            }else if(val < this.min){
                this.currentValue = this.min;
            }else{
                this.currentValue = val;
            }
        },
        handleAdd(){
            if(this.currentValue < this.max){
                this.currentValue++;
            }
        },
        handleDel(){
            if(this.currentValue > this.min){
                this.currentValue--;
            }
        }
    }
    // ,
    // mounted(){
    //     this.updateValue(this.value);
    // }
})