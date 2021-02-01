
export const DELETE_PRODUCT ="DELETE_PRODUCT";
export const ADD_PRODUCT ="ADD_PRODUCT";

export const deleteProduct =(productId)=>{
 return{
     type:DELETE_PRODUCT,
     payload:{productId:productId},

 };


};

export const addItem =(newItem)=>{
    return{
        type:ADD_PRODUCT,
        payload:{newItem},//{newItem:newItem}
   
    };
   
   
   };