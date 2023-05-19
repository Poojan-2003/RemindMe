import "./App.css"
import User from "./Pages/User";
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Customer from "./Pages/Customer";
import Services from "./Pages/Services";
import Dashboard from "./Pages/Dashboard";
import ServiceDetails from "./Pages/ServiceDetails";
import BusinessDetails from "./Pages/BusinessDetails"
import Updateuser from "./Pages/update/Updateuser";
import Updatedashboard from "./Pages/update/Updatedashboard";
const App = () => {
  return(
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element = {<Dashboard />}></Route>
        <Route exact path="/BusinessDetails" element = {<BusinessDetails />}></Route>
        <Route exact path='/Dashboard' element={< Dashboard />}></Route>
        <Route exact path='/Customer' element={< Customer />}></Route>  
        <Route exact path = '/ServiceDetails' element={<ServiceDetails />}></Route>  
        <Route exact path='/Services' element={< Services />}></Route>  
        <Route exact path='/Users' element={< User />}></Route>
        <Route exact path='/Users/Updateuser/:id' element={<Updateuser />}></Route>
        <Route exact path='/Dashboard/Updatedashboard/:id' element={<Updatedashboard />}></Route>
        
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
