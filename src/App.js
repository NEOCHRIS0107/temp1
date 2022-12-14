//import { RouterProvider } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
// import createBrowserRouter from "./router/Router";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Menu from "./components/menu/Menu";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./authentication/Login";
import UpdatePizza from "./components/pizza/UpdatePizza";
import DeletePizza from "./components/pizza/DeletePizza";
import AddPizza from "./components/pizza/AddPizza";
import Coupons from "./components/coupons/Coupons";
import UpdateCoupon from "./components/coupons/UpdateCoupon";
import Customer from "./components/customer/Customer";
import AllOrders from "./components/orders/AllOrders";
import AddCoupon from "./components/coupons/AddCoupon";
import DeleteCoupon from "./components/coupons/DeleteCoupon";
import { useUser } from "./hooks/useUser";
import OrderData from "./components/orders/OrderData";
import CustomerData from "./components/customer/CustomerData";


function App() {
  const { token, logout } = useUser();
  const arrayTry = {
    id: null,
    list: null,
    cName: null
  };
  return (
    <div>
      <Router>
        {token && <NavBar />}

        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/menu/update/:pizzaId" exact element={<UpdatePizza />} />
          <Route path="/menu/delete/:pizzaId" exact element={<DeletePizza />} />
          <Route path="/addpizza" exact element={<AddPizza />} />
          <Route path="/coupon" exact element={<Coupons />} />
          <Route path="/coupon/update/:couponId" exact element={<UpdateCoupon />} />
          <Route path="/coupon/delete/:couponId" exact element={<DeleteCoupon />} />
          <Route path="/addcoupon" exact element={<AddCoupon />} />
          <Route path="/viewcustomers" exact element={<Customer />} />
          <Route path="/viewallorders" exact element={<AllOrders array={arrayTry} />} />
          <Route path="/vieworderdetails" exact element={<OrderData />} />
        </Routes>
      </Router>
    </div>
    // <RouterProvider router={createBrowserRouter} />

  )
}

export default App;
