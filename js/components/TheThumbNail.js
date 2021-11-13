
export default {
    name: "TheThumbnailComponent",

    props: ["piece"],

    template: `
    <div class="car-panel">
        <div>
            <img :src='"images/" + piece.carpic' :alt="piece.name">
            <button @click="showmydata"> {{piece.name}} </button>
            <hr />
        </div>  

    </div>
     `,
     methods: {
         showmydata() {
             this.$emit("showdata", this.piece);
         }
     }
}