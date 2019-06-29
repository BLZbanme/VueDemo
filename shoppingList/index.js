var app = new Vue({
    el: "#app",
    data: {
        list: [
            {
                id: 1,
                name: "iphone 7",
                price: 6188,
                count: 1
            },
            {
                id: 2,
                name: "ipad mini",
                price: 2588,
                count: 2
            },
            {
                id: 1,
                name: "macbook pro",
                price: 3684,
                count: 3
            }
        ]
    },
    computed: {
        totalPrice(){
            let sum = 0;
            for(let li of this.list){
                sum += li.price * li.count;
            }
            return sum.toString().replace(/\B(?=(\d{3})+$)/g, ",");
        }
    },
    methods: {
        add(item){
            item.count++;
        },
        del(item){
            if(item.count > 0){
                item.count--;
            }
        },
        remove(index){
            this.list.splice(index, 1);
        }
    }
})