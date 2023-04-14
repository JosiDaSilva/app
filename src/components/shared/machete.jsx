
 <div className="grid justify-center gap-2">
 <p className="text-white p-.2">{product.stock_corrientes} en Stock en Corrientes</p><label for="stock_corr">Elegir Cantidad (10-{product.stock_corrientes}):</label>
 <input required type="number" Corr="product.stock_corr" name="stock_corr"
step="10"min="10" max={product.stock_corrientes} className=" p-.3 items-center rounded-xl text-black"/><button className="bg-[#f07c04] p-1 flex 
rounded-xl text-white text-center justify-center" onClick={()=>onAddProduct(product.stock_corrientes)}>Agregar</button>

   </div>


<p className="text-white p-.2">{product.stock_misiones} en Stock en Misiones</p><label for="stock_misio">Elegir Cantidad (10-{product.stock_misiones}):</label>
<input required type="number" Mis="product.misio" name="stock_misio"
step="10" min="10" max={product.stock_misiones} className=" p-.3 items-center rounded-xl text-black"/>