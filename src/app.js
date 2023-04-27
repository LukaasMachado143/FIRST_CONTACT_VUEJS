const MyFirstObject = {
    data() {
        return{
            name: "Lucas Fernando",
            office: "Front-End Jr. Developer"
        }
    }
}

Vue.createApp(MyFirstObject).mount("#app");