import products from "../products";
import productsData from "../products";
import slugify from "react-slugify";
const initialState ={
    products:productsData


};

const reducer =(state = initialState ,action) => {
    switch(action.type){
        case "DELETE_PRODUCT":
            return{
                ...state,
                products : state.products.filter(
                (product)=>product.id!==action.payload.productId

                ),
            };
        case "ADD_PRODUCT":
            const {newItem}=action.payload;
            action.payload.newItem.id=state.products[state.products.length-1].id+1;
            newItem.slug=slugify(newItem.name);
            return{
                ...state,
                products:[...state.products, newItem],

            };

         default:
            return state;
    }

};

export default reducer;