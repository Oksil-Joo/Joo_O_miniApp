import { getData } from "./components/TheDataMiner.js";
import TheThumbnailComponent from "./components/TheThumbNail.js";
// import TheLightboxComponent from "./components/TheLightboxComponent.js";


(() => {
    const myVue = new Vue({
        created: function() {
            
            getData(null, (data) => this.carData = data );
        },

        data: {
            carData: [],
            message: "hello from Vue",
            showdata: false
        },


        components: {
            thumb: TheThumbnailComponent,
            // lightbox: TheLightboxComponent
        }
    }).$mount("#app");   
})();