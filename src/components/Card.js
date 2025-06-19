export default function Card(props){
    return(
        <div class="card col-3 m-3">
            <img src={`${props.object.thumbnail}`} alt="...." class="card-img-top" />

            <div class="card-body">
                <h5 class="card-title"> {props.object.title} </h5>
                <p class="card-text"> {props.object.description.substring(0,50)+"..."} </p>
                <p class="card-text fw-bold"> Rs. {props.object.price} </p>
            </div>

        </div>
    );
}