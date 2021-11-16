const initState = {
    items: [
        {
          "id":1,
          "price": 400,
          "currentPrice":400,
          "image": "./img/hanged_plant.jpg",
          "name": "Product Name",
          "quantity": 1,
          "brand": "Brand",
          "description": "Short description of product written here",
          "color": "black"
        },
        {
          "id":2,
          "price": 300,
          "currentPrice":300,
          "image": "./img/jon-flobrant-VjdII_v1_6w-unsplash.jpg",
          "name": "Product Name",
          "quantity": 1,
          "brand": "Brand",
          "description": "Short description of product written here",
          "color": "black"
        },
        {
          "id":3,
          "price": 600,
          "currentPrice":600,
          "image": "./img/sarah-dorweiler-ALtNa-uKy3M-unsplash.jpg",
          "name": "Product Name",
          "quantity": 1,
          "brand": "Brand",
          "description": "Short description of product written here",
          "color": "black"
        }
      ]
}

const ItemsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      state.items = state.items.filter((value,index)=>{
          return value.id !== action.items
      })

      return {
        ...state
      }
    case 'CHANGE_QUNATITY':
      // change where id 
      for(let i of state.items){
        if(i.id === action.qt.id){
            i.quantity = action.qt.quantity
            i.currentPrice = action.qt.quantity * i.price
        }
      }
      return {
        ...state
      }
    default:
      return state
  } 
    
}

export default ItemsReducer