Vue.component("numberInput", {
    template: `
        <p>
            <input v-model.number.lazy="num" type="number"/>
            <button @click="handleDel">-</button>
            <button @click="handleAdd">+</button>
        </p>
    `,
    data(){
        return {
            numData: 0
        }
    },
    computed: {
        num: {
            set(val){
                if(val > maxNum){
                    this.numData = maxNum;
                }else if(val < minNum){
                    this.numData = minNum;
                }else{
                    this.numData = val;
                }
            },
            get(){
                return this.numData;
            }
        }
    },
    methods: {
        handleDel(){
            if(this.numData != minNum){
                this.$emit("del", --this.numData);
            } 
        },
        handleAdd(){
            if(this.numData != maxNum){
                this.$emit("add", ++this.numData);
            }
        }
    }
})