import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableData from "./component/Table";
import FormCE from "./component/Form";
import EditForm from "./component/EditForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableData />} />
        <Route path="/form" element={<FormCE />} />
        <Route path="/edit/:id" element={<EditForm />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
