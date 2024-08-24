
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css"
const ProductList2 = [
        {
            "name": "LapTop Lenovo 15.6",
            "price": "29,680,000 تومان",
            "image": "https://image.torob.com/base/images/R-/f9/R-f9wu09d0WxMVa1.webp_/0x176.webp"
        },
        {
            "name" : "LapTop MacBok",
            "price": "40,800,000 تومان",
            "image": "https://image.torob.com/base/images/ZT/oX/ZToXu6-lH29qxdKh.jpg_/0x176.webp"
        },
        {
            "name": "LapTop 15.6",
            "price": "22,700,000 تومان",
            "image": "https://image.torob.com/base/images/ae/Hz/aeHzLkwDE0Ms-odQ.webp_/0x176.webp"
        },
        {
            "name": "LapTop MacBok Air",
            "price": "49,900,000 تومان",
            "image": "https://image.torob.com/base/images/yE/OI/yEOIBVBKLo0Qnmxs.jpg_/0x176.webp"
        },
        {
            "name": "Lenovo 15.6",
            "price": "27,300,000 تومان",
            "image": "https://image.torob.com/base/images/8L/cA/8LcA7V7k-EDoYpdz.png_/0x176.webp"
        },
        {
            "name": "Lenovo 15.6",
            "price": "9,300,000 تومان",
            "image": "https://image.torob.com/base/images/Ya/_A/Ya_ABAPgPhmAF6ob.webp_/0x176.webp"
        },
        {
            "name": "Lenovo 15.6",
            "price": "48,300,000 تومان",
            "image": "https://image.torob.com/base/images/CB/LB/CBLBA3mQy90xgmja.jpg_/0x176.webp"
        },
        {
            "name": "Lenovo 15.6",
            "price": "12,300,000 تومان",
            "image": "https://image.torob.com/base/images/BU/uM/BUuMZ3jEMBrC-XV5.webp_/0x176.webp"
        },
        {
            "name": "Lenovo 15.6",
            "price": "27,300,000 تومان",
            "image": "https://image.torob.com/base/images/8L/cA/8LcA7V7k-EDoYpdz.png_/0x176.webp"
        },
        {
            "name": "Lenovo 15.6",
            "price": "9,300,000 تومان",
            "image": "https://image.torob.com/base/images/Ya/_A/Ya_ABAPgPhmAF6ob.webp_/0x176.webp"
        },
        {
            "name": "Lenovo 15.6",
            "price": "48,300,000 تومان",
            "image": "https://image.torob.com/base/images/CB/LB/CBLBA3mQy90xgmja.jpg_/0x176.webp"
        },
        {
            "name": "Lenovo 15.6",
            "price": "12,300,000 تومان",
            "image": "https://image.torob.com/base/images/BU/uM/BUuMZ3jEMBrC-XV5.webp_/0x176.webp"
        },
    ]


function ProductList() {
    return (

        <div className="Product_list">
            {ProductList2.map((item) => (
                <ProductCard image={item.image} name={item.name} price={item.price} />
            ))}
        </div>

    );
}
export default ProductList;