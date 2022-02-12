import Home from "../pages/Home";
import PantryDetail from "../pages/PantryDetail";
import OrderConfirm from "../pages/Checkout";
import ErrorNotFound from "../pages/ErrorNotFound";
import Confirmation from "../pages/Confirmation";

const mainRoutes = [
  { path: "/", loginRequired: false, component: Home, exact: true },
  {
    path: "/pantry/:id",
    loginRequired: false,
    component: PantryDetail,
    exact: true,
  },
  {
    path: "/checkout",
    loginRequired: false,
    component: OrderConfirm,
    exact: true,
  },
  {
    path: "/confirm/:orderID",
    loginRequired: false,
    component: Confirmation,
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
