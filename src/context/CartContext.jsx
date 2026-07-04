import { createContext, useEffect, useState } from "react"
import { getProductData } from "../api/ProductApi";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => { },
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  deleteItemFromCart: () => { },
  getTotalAmount: () => [],
  getShipping: () => [],
  getTotal: () => [],
  updateQuantity: () => { },
  updateTotal: () => { }
});

export const ContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponCode , setCouponCode] = useState("")
  

  function getProductQuantity(id) {
    const quantity = cartProducts.find((item) => item.id === id)?.quantity;
    if (quantity === undefined) return 0;
    return quantity;
  }

  function addItemToCart(id, quantity = 1) {
    const productQuantity = getProductQuantity(id);
    if (productQuantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: quantity }])
    } else {
      setCartProducts(
        cartProducts.map((item) => (
          item.id === id ? { ...item, quantity: item.quantity + quantity }
            : item
        ))
      )
    }
  }

  function deleteItemFromCart(id) {
    setCartProducts(cartProducts.filter(item => item.id !== id));
  }

  function removeItemFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteItemFromCart(id)
    } else {
      setCartProducts(
        cartProducts.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 }
          : item
        ))
    }
  }

  function getTotalAmount() {
    const total = cartProducts.reduce((total, item) => {
      const productData = getProductData(item.id);
      const itemTotal = productData.title === "Strwaberry"
        ? Math.round((productData.price * item.quantity) * 0.7)
        : productData.price * item.quantity;
      return total + itemTotal;
    }, 0)
    return total;

  }
  function getShipping() {
    const shipping = getTotalAmount();
    const shippingCost = shipping > 500 || shipping === 0 ? 0 : 10
    return shippingCost
  }

  function getTotal() {
    const itemsTotal = getTotalAmount();
    const shippingCost = getShipping();
    const finaltotal = itemsTotal + shippingCost - discountAmount;
    return finaltotal;
  }

  function updateQuantity(id, quantity) {
    setCartProducts(prevProducts =>
      prevProducts.map((item) => item.id === id ? { ...item, quantity } : item)

    )

  }

  useEffect(()=>{
    if(couponCode === "OFF"){
      setDiscountAmount(getTotalAmount() * 0.1);
    
    }else{
      setDiscountAmount(0);
  
    }
  } , [cartProducts , couponCode])

  
  function applyCoupon(code) {
    setCouponCode(code)
  }

  
  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    getTotalAmount,
    getShipping,
    getTotal,
    updateQuantity,
    applyCoupon,
    discountAmount,
    setDiscountAmount,

  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

