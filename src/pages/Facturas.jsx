import { useState, useEffect } from "react"
import { getFacturasService, deleteFacturaService } from "../service/emergiaService"
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import moment from "moment";

export const Facturas = () => {
  const navigate = useNavigate();
  const [facturas, setFacturas] = useState([])
  const [estado, setEstado] = useState(true)

  useEffect(() => {
    getFacturas()
  }, []);

  const getFacturas = async () => {
    const { ok, data } = await getFacturasService()
    if (ok) { setFacturas(data) }
    else {
      setEstado(false)
    }
  }

  const verFactura = (id) => {

    navigate(`/factura/ver/${id}`)
  }


  const editarFactura = (id) => {

    navigate(`/factura/editar/${id}`)
  }

  const elimarFatura = async (id) => {
    const { ok } = await deleteFacturaService(id)
    if (ok) {
      setFacturas(facturas.filter(factura => factura.idfactura !== id))
    }else{
      alert("no se pudo eliminar la factura")
    }
  }


  return <>
    <h2 className="titulo">Listado de factura</h2>
    <hr />
    {estado ? <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Fecha</th>
          <th scope="col"># Cliente</th>
          <th scope="col"># Vendedor</th>
          <th scope="col"></th>

        </tr>
      </thead>
      <tbody>

        {facturas.map((factura) => (
          <tr key={factura.idfactura}>
            <td>{factura.idfactura}</td>
            <td>{ moment(factura.fecha).format("MM-DD-YYYY, h:mm a")}</td>
            <td>{factura.numCliente}</td>
            <td>{factura.numVendedor}</td>
            <td>
              <Row className="p-0 m-0">
                <Col className="p-0 m-0">

                  <Button variant="outline-info" onClick={() => verFactura(factura.idfactura)} >  Ver </Button>
                </Col>
                <Col className="p-0  m-0">

                  <Button variant="outline-warning" onClick={() => editarFactura(factura.idfactura)} >  Editar </Button>
                </Col>
                <Col className="p-0  m-0">

                  <Button variant="outline-danger" onClick={() => elimarFatura(factura.idfactura)} > eliminar </Button>
                </Col>
              </Row></td>

          </tr>
        ))}

      </tbody>
    </table>
      :
      <>
        <h2>No se puede obtener los recursos</h2>
      </>
    }
  </>
}
