
import { DashBoard } from "./pages/dashboard";
import { HomePage } from "./pages/homepage";
import { SharedDashboard } from "./pages/shareDashboard";
import { SignIn } from "./pages/signin";
import { Signup } from "./pages/signup";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App(){
  return <BrowserRouter>
   <Routes>
   <Route path="/" element={<Navigate to="/homepage" replace />} />
    <Route path="/homepage" element={<HomePage/>}/>
    <Route path="/signup" element={<Signup/>} />
    <Route path="/signin" element={<SignIn/>} />
    <Route path="/dashboard" element={<DashBoard/>} />
    <Route path="/share/:hash" element={<SharedDashboard/>}/>
   </Routes>
  </BrowserRouter>

}
export default App;
