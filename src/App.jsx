import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
// import Product1Page from './pages/Product1Page'
// import Product2Page from './pages/Product2Page'
// import Product3Page from './pages/Product3Page'
// import Product4Page from './pages/Product4Page'
// import Product5Page from './pages/Product5Page'

function App() {
  return (
    <div>
      <Routes>
        <Route
          exact
          path='/'
          element={<Homepage />}
        />
        {/* <Route
          path='/product/1'
          element={<Product1Page />}
        />
        <Route
          path='/product/2'
          element={<Product2Page />}
        />
        <Route
          path='/product/3'
          element={<Product3Page />}
        />
        <Route
          path='/product/4'
          element={<Product4Page />}
        />
        <Route
          path='/product/5'
          element={<Product5Page />}
        /> */}
      </Routes>
    </div>
  )
}

export default App
