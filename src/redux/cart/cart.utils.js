//existing cart items,newly adding cart item to check for existnc
export const addItemtoCart=(cartItems,cartItemtoAdd)=>{
    //return true or undefind
    const existingCartItem=cartItems.find(
        cartItem=>cartItem.id===cartItemtoAdd.id
     )
    //  check if true and then return a new version of cart item array to update the qty if already exists using map()

    if(existingCartItem)
    {
       return  cartItems.map((cartItem)=>
            cartItem.id===cartItemtoAdd.id? {...cartItem,quantity:cartItem.quantity+1}:cartItem
       )
    }
//if undefined set a base qty 1
    return [...cartItems,{...cartItemtoAdd,quantity:1}]

}


export const decremntItemQtyfromCart=(cartItems,cartItemtoDecrementqty)=>{

    const existingCartItem=cartItems.find(
        cartItem=>cartItem.id===cartItemtoDecrementqty.id
    )
// if qty less than 1 then remove item from cart otherwise decrease qty
if(existingCartItem.quantity===1)
{
    //if id not match then keep item else remove item
return cartItems.filter(cartItem=>cartItem.id!==cartItemtoDecrementqty.id)
}

return cartItems.map(cartItem=>(
    cartItem.id===cartItemtoDecrementqty.id?{...cartItem,quantity:cartItem.quantity-1}:cartItem
))




}