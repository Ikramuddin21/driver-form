import { BrowserRouter, Route, Routes } from "react-router-dom";
import DriverList from "./pages/DriverList";
import AddDriver from "./pages/AddDriver";
import EditDriver from "./pages/EditDriver";

function App() {
  return (
    <div className="mt-20 max-w-[800px] w-full p-4 mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DriverList />} />
          <Route path="/add-driver" element={<AddDriver />} />
          <Route path="/edit-driver/:id" element={<EditDriver />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
