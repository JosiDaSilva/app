import { useReducer } from "react";
import { shoppingInitialState, shoppingReducer } from "./CarReducer";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";
import Card from "./Card";
import { TYPES } from "./CarActions";
const Carrito = (props)=>{
  const { showOrder, setShowOrder } = props;
const [state, dispatch]= useReducer(shoppingReducer, shoppingInitialState);
const {products, cart}=state;

const addToCart =(id)=>{
dispatch({type: TYPES.ADD_TO_CART, payload: id});
};
const clearCart=()=>{};


return(
    <div
    className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
      showOrder ? "right-0" : "-right-full"
    }`}
  >
    {/* Orders */}
    <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
      <RiCloseLine
        onClick={() => setShowOrder(false)}
        className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
      />
      <h1 className="text-2xl my-4">Pedido N° #151416</h1>
      {/* Pills */}
      <div className="flex items-center gap-4 flex-wrap mb-8">
        <button className="bg-[#f07c04] text-white py-2 px-4 rounded-xl">
         Pedido
        </button>
        
        <button className="text-[#f07c04] py-2 px-4 rounded-xl border border-gray-500">
          Envío
        </button>
      </div>
      {/* Car */}
      <div>
        <div className="grid grid-cols-6 mb-4 p-4">
          <h5 className="col-span-4">Item</h5>
          <h5>Cantidad.</h5>
          <h5>Precio</h5>
        </div>
        {/* Products */}
        <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
          {/* Product */}
          <div className="bg-[#262837] p-4 rounded-xl mb-4">
            <div className="grid grid-cols-6 mb-4">
              {/* Product description */}
              <div className="col-span-4 flex items-center gap-3">
               
              </div>
              {/* Qty */}
              <div>
                <span>5</span>
              </div>
              {/* Price */}
              <div>
                <span>$4.58</span>
              </div>
            </div>
            {/* Note */}
            <div className="grid grid-cols-6 items-center">
              <form className="col-span-5">
                <input
                  type="text"
                  className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                  placeholder="Número de Pedido..."
                />
              </form>
              <div>
                <button className="border border-red-500 p-2 rounded-lg">
                  <RiDeleteBin6Line className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
          {/* Product */}
          <div className="bg-[#262837] p-4 rounded-xl mb-4">
            <div className="grid grid-cols-6 mb-4">
              {/* Product description */}
              <div className="col-span-4 flex items-center gap-3">
              
              </div>
              {/* Qty */}
              <div>
                <span>2</span>
              </div>
              {/* Price */}
              <div>
                <span>$4.58</span>
              </div>
            </div>
            {/* Note */}
            <div className="grid grid-cols-6 items-center">
              <form className="col-span-5">
                <input
                  type="text"
                  className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                  placeholder="Número de Pedido..."
                />
              </form>
              <div>
                <button className="border border-red-500 p-2 rounded-lg">
                  <RiDeleteBin6Line className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
          {/* Product */}
          <div className="bg-[#262837] p-4 rounded-xl mb-4">
            <div className="grid grid-cols-6 mb-4">
            {products.map((product)=>{
                    <Card key={product.id} data={product} addToCart={addToCart}/>
                })}
              </div>
              {/* Qty */}
              <div>
                <span>2</span>
              </div>
              {/* Price */}
              <div>
                <span>$4.58</span>
              </div>
            </div>
            {/* Note */}
            <div className="grid grid-cols-6 items-center">
              <form className="col-span-5">
                <input
                  type="text"
                  className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                  placeholder="Número de Pedido..."
                />
              </form>
              <div>
                <button className="border border-red-500 p-2 rounded-lg">
                  <RiDeleteBin6Line className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
          {/* Product */}
          <div className="bg-[#262837] p-4 rounded-xl mb-4">
            <div className="grid grid-cols-6 mb-4">
            {products.map((product)=>{
                    <Card key={product.id} data={product} addToCart={addToCart}/>
                })}
              </div>
              {/* Qty */}
              <div>
                <span>2</span>
              </div>
              {/* Price */}
              <div>
                <span>$4.58</span>
              </div>
            </div>
            {/* Note */}
            <div className="grid grid-cols-6 items-center">
              <form className="col-span-5">
                <input
                  type="text"
                  className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                  placeholder="Número de Pedido..."
                />
              </form>
              <div>
                <button className="border border-red-500 p-2 rounded-lg">
                  <RiDeleteBin6Line className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
        
      
      {/* Submit payment */}
      <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-400">Descuento</span>
          <span>$0</span>
        </div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-gray-400">Subtotal</span>
          <span>$201.03</span>
        </div>
        <div className="flex  items-center justify-between gap-10 flex-wrap mb-6">
          <button className="bg-[#f07c04] py-2 px-8 rounded-lg">
            Confirmar Pedido
          </button>
          <button className="bg-[#f07c04] py-2 px-8 rounded-lg">
            Vaciar Carrito
          </button>
          {cart.map
          ((item, index)=><cartItem key={index} data={item}delFromCart={delFromCart}/>)}
        </div>
      </div>
    </div>
  </div>
);
};
export default Carrito;