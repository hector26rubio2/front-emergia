import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
export const FormCustom = ({ form, service }) => {
  const navigate = useNavigate();
  const {
    //accion
    onInputChange,
  
    formState,
    formSubmitted,
    // estado validaciones formulario
    isFormValid,

    //Permiso
    idfactura,
    fecha,
    numCliente,
    numVendedor,
    idfacturaValid,

    numClienteValid,
    numVendedorValid,



  } = form
  
  const guarDarFactura =async()=>{
   
    if( isFormValid)
    {
      const {ok} = await service(formState)
      if(ok){
        navigate(`../facturas`)
      }
    }
  }
  return <Form>


    <Row className="mb-3">
      <Form.Group as={Col} >
        <Form.Label>Identifiacion Factura</Form.Label>
        <Form.Control type="number" placeholder="Identifiacion Factura" name="idfactura" value={idfactura}
          error={!idfacturaValid ? idfacturaValid : ""}
          helperText={!!idfacturaValid && formSubmitted ? idfacturaValid : ""}
          onChange={onInputChange} />
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="date" placeholder="Ingrese la fecha" name="fecha" value={fecha}
          onChange={onInputChange} />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label>Numero cliente</Form.Label>
        <Form.Control type="number" placeholder="Numero cliente" name="numCliente" value={numCliente}
          error={!numClienteValid ? numClienteValid : ""}
          helperText={!!numClienteValid && formSubmitted ? numClienteValid : ""}
          onChange={onInputChange} />
      </Form.Group>

      <Form.Group as={Col} >
        <Form.Label>Numero vendedor</Form.Label>
        <Form.Control type="number" placeholder="Numero vendedor" name="numVendedor" value={numVendedor}
          error={!numVendedorValid ? numVendedorValid : ""}
          helperText={!!numVendedorValid && formSubmitted ? numVendedorValid : ""}
          onChange={onInputChange} />
      </Form.Group>
    </Row>



    <Button variant="outline-primary" onClick={()=>guarDarFactura()} >
      Submit
    </Button>
  </Form>

}
