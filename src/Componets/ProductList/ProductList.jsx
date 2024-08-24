
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css"
const ProductList2 = [
        {
            "name": "گوشی هوشمند مدل X",
            "price": "10,000,000 تومان",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5ec284a09a2367deaf00690fd3c7d847672135d8_1610534871.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
        },
        {
            "name": "لپ‌تاپ مدل Y",
            "price": "25,000,000 تومان",
            "image": "https://dkstatics-public.digikala.com/digikala-products/736c18141b07b57542bbd37342f205a0a7f740c0_1675029020.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
        },
        {
            "name": "دوربین عکاسی Z",
            "price": "15,000,000 تومان",
            "image": "https://dkstatics-public.digikala.com/digikala-products/5c851c5a19e6564a46752ac39b5cf37ebb3d9a8b_1718532989.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
        },
        {
            "name": "تبلت مدل A",
            "price": "8,000,000 تومان",
            "image": "https://dkstatics-public.digikala.com/digikala-products/ddf4fe08d9f86c4b9be76894489013911570ab91_1702374171.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
        },
        {
            "name": "ساعت هوشمند B",
            "price": "5,000,000 تومان",
            "image": "https://dkstatics-public.digikala.com/digikala-products/0f1d1ac12347c3425fee9575ebef616e661febe0_1688370779.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
        }
    ]


function ProductList() {
    return (

        <div className="Product_list">
            {ProductList2.map((item) => (
                <ProductCard image={item.image} titel={item.titel} price={item.price} />
            ))}
        </div>

    );
}
export default ProductList;