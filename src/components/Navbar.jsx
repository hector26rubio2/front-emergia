import { Outlet ,Link } from "react-router-dom";


export  const Navbar = ()=> {
  
  return (
    <>
    <div id="sidebar">
      <h1>Prueba emergia</h1>
      <div>
      <h2>Crud factura</h2>
      </div>
      <nav>
        <ul>
          <li>
              <Link to={`facturas`}>Listar</Link>
            </li>
            <li>
              <Link to={`factura/nuevo`}>Crear</Link>
            </li>
        </ul>
      </nav>
    </div>
    <div id="detail">
        <Outlet />
      </div>
  </>
  )
}
