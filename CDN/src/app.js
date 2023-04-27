const MyFirstApp = {
    data() {
        return{
            name: "",
            office: "Front-End Jr. Developer",
            input_name: ""
        }
    },
    methods: {
        submitValue(e){
            e.preventDefault();
            
            this.name = this.input_name;
        }
    },
}

Vue.createApp(MyFirstApp).mount("#app");