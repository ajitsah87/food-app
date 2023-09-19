
import './globals.css';
import Home from './screens/Home'
import About from './screens/About'
// import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './screens/NotFound'
import Contact from './components/Contact';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

function App() {

  const Layout = () => {
    return (
       <div className="App">
          {/* <Navbar /> */}
          <main className="main">
             <Outlet />
          </main>
          <Contact />
          <Footer />
       </div>
    );
 };

 const router = createBrowserRouter([
    {
       path: "/",
       element: <Layout />,
       children: [
          {
             path: "/",
             element: <Home />,
          },
          {
             path: "/about",
             element: <About />,
          },
          {
            path: "*",
            element: <NotFound />,
         }
       ],
    },
 ]);

 return <RouterProvider router={router} />;

}

export default App
