import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import {
  HomeScreen,
  LoginScreen,
  RestaurantScreen,
  SignupScreen,
} from './Screens';
import App from './App';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index="*" element={<HomeScreen />}></Route>
        <Route path="login" element={<LoginScreen />}></Route>
        <Route path="restaurant" element={<RestaurantScreen />}></Route>
        <Route path="signup" element={<SignupScreen />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
