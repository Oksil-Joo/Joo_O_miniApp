
export default {
    name: "TheThumbnailComponent",

    props: ["piece"],

    template: `
    <div class="car-panel">
        <div>
            <img :src='"images/" + piece.carpic' :alt="piece.name">
        </div>  
        <div>
            <h1 class="title"> {{piece.name}} </h1>
            <p>{{piece.description}} </p>
            <h1> Starting from </h1>
            <p> {{piece.price}} </p>
            <h1> Fuel economy per 100 km </h1>
            <p> {{piece.fuel}} </p>
            <h1> Available </h1>
            <p> {{piece.available}} </p>
            <h1> Performance Features </h1>
            <p> {{piece.features}} </p>
        <div>
    </div>
     `
}