import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Index";
import Home from "./pages/Home/Index";
import Dashboard from "./pages/Dashboard/Index";
import Sample from "./pages/Sample/Index";
import Form from "./pages/Form/Index";
import Stepper from "./pages/Stepper/Index";
import Temperature from "./pages/Temperature/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sample" element={<Sample />} />
          <Route path="form" element={<Form />} />
          <Route path="stepper" element={<Stepper />} />
          <Route path="temperature" element={<Temperature />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
