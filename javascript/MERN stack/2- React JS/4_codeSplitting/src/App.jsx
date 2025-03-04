import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Suspense, lazy } from "react";

// Lazy loading components
const Home = lazy(() => wait(5).then(()=>import("./Components/Home")));
const About = lazy(() => wait(5).then(()=> import("./Components/About")));
const Card = lazy(() => wait(5).then(()=> import("./Components/Card")));


// if the network is slow this is the function for fallback for suspense 
const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time*1000);
  })
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Home />
          </Suspense>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        </>
      ),
    },
    {
      path: "/card",
      element: (
        <>
          <Navbar />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Card />
          </Suspense>
        </>
      ),
    },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <RouterProvider router={router} />
    </div>
  );
}

// Loading component (fallback UI)
const Loading = () => (
  <div className="flex justify-center items-center h-[80vh]">
    <h2 className="text-2xl text-gray-500">Loading...</h2>
  </div>
);

export default App;
