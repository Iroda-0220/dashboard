import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppLayout } from "./layouts";
import Dashboard from "./pages/Dashboard";
import  Login  from "./components/Login";
export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element = { <AppLayout />}>
        <Route path="/" element = { <Login/>}/>
      
        
        
      <Route index element = {  <Dashboard/>}/>
    
     
      </Route>

      <Route path="*" element = { <h1>Not found 404</h1> }/>

    </Routes>
  </Router>
  )
}
