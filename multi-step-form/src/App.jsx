import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/FormContext";
import Main from "./routes/main/Main";

function App() {
  return (
    <BrowserRouter>
      <FormProvider>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </FormProvider>
    </BrowserRouter>
  );
}

export default App;
