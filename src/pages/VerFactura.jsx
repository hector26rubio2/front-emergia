import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { getFacturaService } from "../service/emergiaService"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './page.css'

export const VerFactura = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [factura, setFactura] = useState(null)


  useEffect(() => {
    getFactura(id)
  }, [id]);

  const getFactura = async (id) => {
    const { ok, data } = await getFacturaService(id)
    if (ok) { setFactura(data) }
  }

  const volver = () => {
    navigate(-1)
  }

  const EstructuraContenido = () => {
    return <>
      <h1>Información de la factura</h1>
      <hr />
      <Container className="ver">
        <Row className="spacio">
          <Col><p> <strong> Identifador :</strong> {factura.idfactura}</p></Col>
          <Col><p><strong> Fecha :</strong> {factura.fecha}</p></Col>
        </Row>
        <Row className="spacio">
          <Col><p><strong> Numero Cliente:</strong> {factura.numCliente}</p></Col>
          <Col><p><strong> Numero Vendedor:</strong> {factura.numVendedor}</p></Col>
        </Row>
        <Row className="spacio">
          <hr />
          <Col></Col>
          <Col className="d-flex justify-content-center">
            <Button variant="outline-info center" onClick={() => volver()} > Regresar </Button>
          </Col>
        </Row>
      </Container>
    </>
  }


  return <>{factura ? <EstructuraContenido /> : <h2>Cargando ...</h2>}</>
}