<h1 align="center">React Router</h1>

Práctica con React Router.

## Temas

- Rutas básicas
- Rutas con parámetros
- Rutas secundarias

```js
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import RutasBasicas from './pages/RutasBasicas'
import RutasConParametros from './pages/RutasConParametros'
import RutasSecundarias from './pages/RutasSecundarias'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main>
          <SideBar />
          <div className="article">
            <Routes>
              <Route path="/" element={<h1>Inicio</h1>}></Route>
              <Route path="/rutas-basicas/*" element={<RutasBasicas />}></Route>
              <Route path="/rutas-parametros/*" element={<RutasConParametros />}></Route>
              <Route path="/rutas-secundarias/*" element={<RutasSecundarias />}>
                <Route path="chart" element={<p>-- Chart --</p>} />
              </Route>
              <Route path="*" element={<h1>400 Page not found.</h1>} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
```

## Instalar y ejecutar

```bash
npm i
npm run dev
```