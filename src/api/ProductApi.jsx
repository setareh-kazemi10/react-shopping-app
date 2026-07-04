const productList = [
    {
        id:"1",
        title:"Strwaberry",
        price:85,
        image:"/image/product/product-img-1.jpg",
        category: "Fruits"
    },

       {
        id:"2",
        title:"Berry",
        price:70,
        image:"/image/product/product-img-2.jpg",
        category: "Fruits"

    },

       {
        id:"3",
        title:"Lemon",
        price:75,
        image:"/image/product/product-img-3.jpg",
        category: "Vegetables"
    },

       {
        id:"4",
        title:"Avocado",
        price:50,
        image:"/image/product/product-img-4.jpg",
        category: "Vegetables"

    },

       {
        id:"5",
        title:"Green Apple",
        price:45,
        image:"/image/product/product-img-5.jpg",
        category: "Vegetables"
    },

       {
        id:"6",
        title:"banana",
        price:80,
        image:"/image/product/product-img-6.jpg",
        category: "Fruits"
    },

]
 const getProductData =(id)=>{
    const productData = productList.find((item)=>item.id === id);
    return productData;
}
export {getProductData , productList}