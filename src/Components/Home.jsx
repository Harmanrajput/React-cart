import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// only images
const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";

const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

const Home = () => {
  const ProductList = [{
    name: "Mac book",
    price: 12000,
    imgSrc:img1,
    id: "qwerty"
  },
  {
    name: "Reebok shoes",
    price: 1200,
    imgSrc: img2,
    id: "qwertyefe"
  },
]

// dispatch use here
const dispatch =useDispatch()
const navigate = useNavigate()
// addToCartHandler
const addToCartHandler =(options)=>{
  console.log(options)
  dispatch({type:"addToCart" , payload:options})
  dispatch({type : "calculatePrice",})
  toast.success("product added")
  navigate("/cart")
  
};
  return (
    <div className='home'>
    {/* now mapping the product card */}
    {
      ProductList.map(i=>(
        <ProductCard key={i.id} 
        imgSrc={i.imgSrc}
        name={i.name}
        price={i.price}
        id={i.id}
        handler={addToCartHandler}
        />
      ))
    }

    </div>
  )
}

// product cart tht you going to render on the screen
const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({name,price,id,quantity:1, imgSrc})}>Add to cart</button>
  </div>
)
export default Home