function ProductCard(props){

return(
    <div>
        <img src={props.image} alt="" />
        <p>{props.title}</p>
        <p>{props.price}</p>
    </div>
)
}

export default ProductCard;