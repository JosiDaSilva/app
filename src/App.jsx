import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import { LoginButton } from './components/shared/login';
import './index.css';

import {
  RiMenu3Fill,
  RiPieChartLine,
  RiCloseLine
} from "react-icons/ri";
// Components

import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";





function App() {
  const { isAuthenticated } = useAuth0();
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

 
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);


  return (
    <>
    <div className="bg-[#262837] w-full min-h-screen">
        {isAuthenticated ? (
          <>
           <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder}
     allProducts={allProducts}
     setAllProducts={setAllProducts}
     total={total}
     setTotal={setTotal}
     countProducts={countProducts}
     setCountProducts={setCountProducts} />
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        
       
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-center mb-16">
            <h2 className="text-xl text-gray-300">Selecciona tus productos</h2>
            
          </div>
          {/* Content */}
          <div >
            {/* Card */}
          <Card 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts} />
          </div>
        </div>
      </main>
          </>
        ) : (
          <LoginButton />
        )}
      </div>
      </>
   
  );
  
  }

export default App;