// 







import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import UseState from './Hooks/UseState'
import Login from './Auth/Login'
import Hook from './Hooks/Hook'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import Signup from './Auth/Signup'
import UseRef from './Hooks/UseRef'
import UseReducer from './Hooks/UseReducer'
import UseMemo from './Hooks/UseMemo'
import UseCallback from './Hooks/UseCallback'
import Todo from './component/Todo'   // ✅ FIXED (React component)

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home name="Jaaan" />} />
        <Route path="/about" element={<About name="Jaaan" age={20} dept="CSD" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />

        {/* Hooks */}
        <Route path="/hook" element={<Hook />}>
          <Route path="useState" element={<UseState />} />
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="useEffectApi" element={<UseEffectApi />} />
          <Route path="useRef" element={<UseRef />} />
          <Route path="useReducer" element={<UseReducer />} />
          <Route path="useMemo" element={<UseMemo />} />
          <Route path="useCallback" element={<UseCallback />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
