
import './globals.css';
import Home from './screens/Home'
import About from './screens/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './screens/NotFound'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

<<<<<<< HEAD

=======
>>>>>>> origin/main
function App() {

  const Layout = () => {
    return (
       <div className="App">
          <Navbar />
<<<<<<< HEAD
         
=======
>>>>>>> origin/main
          <main className="main">
             <Outlet />
          </main>
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
