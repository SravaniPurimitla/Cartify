
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status:'idle'
}; 

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // }
  },
  extraReducers:(builder)=>{
  builder
  .addCase(getProducts.pending,(state)=>{
    state.status='Loading'
  })
  .addCase(getProducts.fulfilled,(state,action)=>{
    state.data = action.payload;
    state.status='idle'
  })
  .addCase(getProducts.rejected,(state)=>{
    state.status = 'error';
  })
  }
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;
export const getProducts=createAsyncThunk('products/get',async()=>{
    const response = await fetch('https://dummyjson.com/products'); 
    const result = await response.json(); 
    return result.products; 
})
// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     try {
//       const response = await fetch('https://dummyjson.com/products'); 
//       const result = await response.json();      
//       dispatch(fetchProducts(result.products));  
//     } catch (error) {
//       console.error('Failed to fetch products:', error);
//     }
//   };
// }
