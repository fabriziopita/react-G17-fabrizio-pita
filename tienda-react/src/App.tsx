import { useState, useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import type {EstadoCarga, ItemCarrito, Producto} from "./tipos"
import { agregarItem, quitarItem } from "./carrito"
import formatearPrecio from "./formato"
import { obtenerProductos } from "./api"
import Detalle from './pages/Detalle';
import PanelCarrito from "./components/PanelCarrito"
import { Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import Layout from "./layout/Layout"
import NoEncontrada from "./pages/NoEncontrada"
import Checkout from "./pages/Checkout"

const CLAVE_CARRITO = 'tienda_carrito';

export default function App() {
  const [carrito, setCarrito] = useState<ItemCarrito[]>(leerCarrito);

  const [productos, setProductos] = useState<Producto[]>([]);
  const [estado, setEstado] = useState<EstadoCarga>('cargando');
  const [esRespaldo, setEsRespaldo] = useState(false);
  const [intento, setIntento] = useState(0);
  useEffect(() => {
    const controlador = new AbortController();
    async function cargar () {
      try {
        const resultado = await obtenerProductos();
        setProductos(resultado.productos);
        setEsRespaldo(resultado.esRespaldo);
        setEstado('listo');
      } catch (error) {
        if(error instanceof DOMException && error.name === 'AbortError') return;
        console.warn('Fallo imprevisto al cargar');
        setEstado('error');
      }
    }
    cargar();
    return () => controlador.abort();
  },[intento])
  useEffect( () => {
    try {
      localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
    } catch (error) {
      console.warn('No se pudo guardar el carrito', error instanceof Error ? error.message : error);
    }
  }, [carrito]);

  function agregarAlCarrito(producto : Producto) {
    setCarrito(agregarItem(producto, carrito))
  }
  function quitarDelCarrito(id : number) {
    setCarrito(quitarItem(carrito, id));
  }
  function vaciarCarrito() {
    setCarrito([]);
  }
  function leerCarrito() : ItemCarrito[] {
    try {
      const crudo : unknown = JSON.parse(localStorage.getItem(CLAVE_CARRITO) ?? '[]');
      return Array.isArray(crudo) ? (crudo as ItemCarrito[]) : [];
    } catch (error) {
      return [];
    }
  }
  
  const unidades = carrito.reduce((suma, i) => suma + i.cantidad, 0);
  const total = carrito.reduce((suma, i) => suma + i.precio * i.cantidad, 0);
  const nombreTienda = 'Tienda Tech';
  
  return (
    <Routes>
      <Route element = {
        <Layout
          nombreTienda = {nombreTienda}
          resumen = {`🛒 ${unidades} productos - ${formatearPrecio(total)}`}
          items = {carrito}
          onQuitar = {quitarDelCarrito}
          onVaciar={vaciarCarrito}
        />
      }>
        <Route path="/" element = {
          <Home esRespaldo={esRespaldo} onReintentar={() => {setIntento(intento + 1); setEstado('cargando')}}
          productos={productos} estado={estado} onAgregar={agregarAlCarrito}/>
        }
        />
        <Route  path="/producto/:id" element = {
          <Detalle productos={productos} onAgregar={agregarAlCarrito}/>
        }
        />
        
      </Route>
      <Route path="*" element ={
          <NoEncontrada/>
      }/>
      <Route  path="/checkout" element = {
          <Checkout carrito={carrito} total={total} onVaciar={vaciarCarrito}/>
        }
      />
    </Routes>
  )
}