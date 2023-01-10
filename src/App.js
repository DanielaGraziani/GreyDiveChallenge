import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form.jsx";
import InformationForm from "./components/InformationForm.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/information" element={<InformationForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
