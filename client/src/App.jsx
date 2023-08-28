import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/header/Header";
import { useGetUserQuery } from "./app/api/userApi";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: '/',
        element: <h1>Hello</h1>
      }
    ]
  },
]);

const res = await fetch('/api/user')
const data = await res.json();
console.log(data);

const App = () => {
  const { isLoading, isError, isSuccess, data, error } = useGetUserQuery("")
  console.log(isLoading, isError, isSuccess, data, error);
  return (
    <RouterProvider router={router}>App</RouterProvider>
  )
}

export default App