import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { getFacturaService, putFacturaService } from "../service/emergiaService"
import { useNavigate } from "react-router-dom";
import { FormCustom } from '../components/Form'
import { useForm } from '../hooks/useForm'
import Button from 'react-bootstrap/Button';
import './page.css'
import moment from "moment";

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

export const EditarFactura = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const form = useForm(formData, formValidations);
  const { visualizar } = form







  useEffect(() => {
    getFactura(id)
  }, [id]);

  const getFactura = async (id) => {
    const { ok, data } = await getFacturaService(id)
    if (ok) {
   
      data.fecha = moment(data.fecha).format("yyyy-MM-DD")
      console.log({ data, f: data.fecha })
      visualizar(data)
    }
  }

  const volver = () => {
    navigate(-1)
  }

  return <>
    <h1>Editar factura</h1>
    <hr />
    <FormCustom form={form} service={putFacturaService} />
    <hr />
    <Button variant="outline-danger" onClick={() => volver()} > Cancelar </Button>
  </>

}