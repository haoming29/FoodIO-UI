import Home from "../pages/Home";
import PantryDetail from "../pages/PantryDetail";
import OrderForm from "../pages/OrderForm";
import OrderConfirm from "../pages/OrderConfirm";
import ErrorNotFound from "../pages/ErrorNotFound";

const mainRoutes = [
  { path: "/", loginRequired: false, component: Home, exact: true },
  {
    path: "/pantry/:id",
    loginRequired: false,
    component: PantryDetail,
    exact: true,
  },
  {
    path: "/order",
    loginRequired: false,
    component: OrderForm,
    exact: false,
  },
  {
    path: "/confirmation",
    loginRequired: false,
    component: OrderConfirm,
    exact: true,
  },
  {
    path: "/404",
    loginRequired: false,
    component: ErrorNotFound,
    exact: true,
  },
];

export default mainRoutes;
