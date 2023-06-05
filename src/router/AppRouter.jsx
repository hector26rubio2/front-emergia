import {
  createBrowserRouter,
} from "react-router-dom";
import {ErrorPage} from "../components/ErrorPage";
import {Navbar} from "../components/Navbar";
import {Facturas} from '../pages/Facturas'
import {VerFactura} from '../pages/VerFactura'
import {EditarFactura} from '../pages/EditarFactura'
import {NuevaFactura} from '../pages/NuevaFactura'


export const  RouterApp = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "facturas",
        element:  <Facturas />,
      
      },
      {
        path: "factura/ver/:id",
        element:  <VerFactura />,
      
      },
      {
        path: "factura/editar/:id",
        element:  <EditarFactura />,
      
      },
      {
        path: "factura/nuevo",
        element:  <NuevaFactura />,
      
      },
    ],
  },
]);