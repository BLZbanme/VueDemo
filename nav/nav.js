Vue.component("navBar", {
    template: `
        <div>
            <ul class="navul">
                <li class="navli" v-for="item of items">{{ item.name }}</li>
            </ul>
            <div>
            
            </div>
        </div>
    `,
    prop: {

    },
    data() {
        return {
            items: [
                {
                    name: "1",
                    index: 1
                },
                {
                    name: "2",
                    index: 2
                },
                {
                    name: "3",
                    index: 3
                }
            ]
        }
    }
})