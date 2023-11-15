import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

export async function getProductos() {
    try {
      const response = await axios.get('http://localhost:3000/productos');
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export async function updateProducto(id, producto) {
    try {
      const response = await axios.put(`http://localhost:3000/productos/${id}`, producto);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }


export async function saveProducto(producto) {
    try {
      const response = await axios.post('http://localhost:3000/carrito', producto);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  export async function getCarrito() {
    try {
      const response = await axios.get('http://localhost:3000/carrito');
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  export async function deleteCarrito(id) {
    try {
      const response = await axios.delete(`http://localhost:3000/carrito/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  export async function updateCarrito(id, producto) {
    try {
      const response = await axios.put(`http://localhost:3000/carrito/${id}`, producto);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export async function GuardarCompras(compra) { 
    try {
        console.log(compra);
        const response = await axios.post('http://localhost:3000/compras', compra);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
 }
