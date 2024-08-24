function ProductCard(props){

return(
    <div className="ProductCard">
        <img className="Image" src={props.image} alt="" />
        <p className="txt1">{props.name}</p>
        <p className="txt2">{props.price}</p>
    </div>
)
}

export default ProductCard;