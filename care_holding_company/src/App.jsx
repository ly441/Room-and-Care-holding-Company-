
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { BranchProvider } from "./context/BranchContext";
import PrivateRoute from "./components/auth/PrivateRoute";
import Login from "./components/auth/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Shifts from "./pages/Shifts";
import Payroll from "./pages/Payroll";
import Layout from "./components/common/Layout";

function App() {
  return (
    <Router>
      <AuthProvider>
        <BranchProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Layout />
                </PrivateRoute>
              }
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="employees" element={<Employees />} />
              <Route path="shifts" element={<Shifts />} />
              <Route path="payroll" element={<Payroll />} />
            </Route>
          </Routes>
        </BranchProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
