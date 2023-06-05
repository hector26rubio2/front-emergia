

import { postFacturaService } from "../service/emergiaService"

import { FormCustom } from '../components/Form'
import { useForm } from '../hooks/useForm'
import './page.css'


const formData = {
  idfactura: 0,
  fecha: "",
  numCliente: 0,
  numVendedor: 0
}
const formValidations = {
  //fase
  idfactura: [(value) => value.length > 0, "El idfactura es obligatorio."],
  numCliente: [(value) => value.length > 0, "El numCliente es obligatorio."],
  numVendedor: [(value) => value.length > 0, "El numVendedor es obligatorio."],
};

export const NuevaFactura = () => {

  const form = useForm(formData, formValidations);





  return <>
    <h1>Información de la nueva factura</h1>
    <hr />
    <FormCustom form ={form}  service={postFacturaService}/>
    </>
}