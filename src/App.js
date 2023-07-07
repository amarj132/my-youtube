import { Provider } from "react-redux";
import "./App.css"
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainCintainer from "./components/MainCintainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children:[
    {
      path:"/",
      element: <MainCintainer />
    },
    {
      path:"watch",
      element: <WatchPage />
    },
  ]
}])

function App() {
  return (
    <Provider store={store} >
    <div>
      <Head />
      <RouterProvider router={appRouter} />
      
    </div>
    </Provider>
  );
}

export default App;
