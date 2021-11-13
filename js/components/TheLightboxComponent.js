
export default {
    name: "TheLightboxComponent",

    props: ["piece"],

    template:
    `<section class="lightboxWrapper">
        <div>
            <h1 class="title"> {{piece.name}} </h1>
            <p>{{piece.description}} </p>
            <h2> Starting from </h2>
            <p> {{piece.price}} </p>
            <h2> Fuel economy per 100 km </h2>
            <p> {{piece.fuel}} </p>
            <h2> Available </h2>
            <p> {{piece.available}} </p>
            <h2> Performance Features </h2>
            <p> {{piece.features}} </p>
        <div>
    </section>
    `
}