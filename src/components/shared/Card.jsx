import React from "react";
import { data } from "../../data/products";
export const Card = ({
  allProducts,
  setAllProducts
}) => {
  const onAddProduct = (product) => {
  if(allProducts.find(item=>item.id ===product.id)){
const products= allProducts.map(item=>item.id===product.id ? {...item, quantity: item.quantity +1} : 
  item);
  
    return setAllProducts([...products]);
}
    setAllProducts([...allProducts, product]);
  
  };

  return (
    
      
      <div className= "p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {data.map(product => (
        <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300' key={product.id}>
          <figure>
            <img src={product.imagen} alt={product.nombre}className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
          </figure>
          <div className='info-product'>
            <h2 className="text-s">{product.nombre}</h2>
            <h2 className="text-s">{product.aplicación}</h2>
            <span className='text-gray-300'>${product.precio},00</span>
          <p className="text-s">Cód. Orig: {product.código_original}</p>
        
         

             <div className="grid justify-center gap-2">
 <p className="text-white p-.2">{product.stock_corrientes} en Stock en Corrientes</p><label for="stock_corr">Elegir Cantidad (10-{product.stock_corrientes}):</label>
 <input required type="number" id="stock_corr" name="stock_corr"
step="10"min="10" max={product.stock_corrientes} className=" p-.3 items-center rounded-xl text-black"/>
	<button className="bg-[#f07c04] p-1 flex rounded-xl text-white text-center justify-center" onClick={()=>onAddProduct(product)}>Agregar</button>

   </div>


<p className="text-white p-.2">{product.stock_misiones} en Stock en Misiones</p><label for="stock_misio">Elegir Cantidad (10-{product.stock_misiones}):</label>
<input required type="number" id="product.stock_misio" name="stock_misio" class="misio" step="10" min="10" max={product.stock_misiones} className=" p-.3 items-center rounded-xl text-black"/>
	<input type="number" id="quantity_643eca8e89940" class="input-text qty text" step="1" min="1" max="10" name="quantity" value="1" title="Cantidad" size="4" placeholder="" inputmode="">
     <button type="submit" name="add-to-cart" value="product.id" className="bg-[#f07c04] p-1 flex rounded-xl text-white text-center justify-center" onClick={()=>onAddProduct(product)}>Agregar</button>
      

          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Card;
