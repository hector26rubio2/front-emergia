import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:44333/api/",
  timeout: 1000,
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json"
});

export const getFacturasService = async () => {
  try {
    const resp = await instance
      .get(`Factura`)
      .then(response => {
        const { data } = response;
        return { ok: true, data };
      })
      .catch(error => error);

    return resp;
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const getFacturaService = async id => {
  try {
    const resp = await instance
      .get(`Factura/${id}`)
      .then(response => {
        const { data } = response;
        return { ok: true, data };
      })
      .catch(error => error);

    return resp;
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const deleteFacturaService = async id => {
  try {
    const resp = await instance
      .delete(`Factura/${id}`)
      .then(() => {
        return { ok: true };
      })
      .catch(error => error);

    return resp;
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const postFacturaService = async (factura) => {
  const formData = {
    idfactura: parseInt(factura.idfactura),
    fecha: factura.fecha,
    numCliente: parseInt(factura.numCliente),
    numVendedor: parseInt(factura.numVendedor)
  };
  console.log({formData})
  try {
    const resp = await instance
      .post(`Factura`, formData)
      .then(() => {
        return { ok: true };
      })
      .catch(error => error);

    return resp;
  } catch (error) {
  
    return { ok: false, errorMessage: error.message };
  }
};


export const putFacturaService = async (factura) => {
  const formData = {
    idfactura: parseInt(factura.idfactura),
    fecha: factura.fecha,
    numCliente: parseInt(factura.numCliente),
    numVendedor: parseInt(factura.numVendedor)
  };
  console.log({formData})
  try {
    const resp = await instance
      .post(`Factura`, formData)
      .then(() => {
        return { ok: true };
      })
      .catch(error => error);

    return resp;
  } catch (error) {
  
    return { ok: false, errorMessage: error.message };
  }
};