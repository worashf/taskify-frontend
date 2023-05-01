import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Routes, Route } from "react-router";
import { useMode, ColorModeContext } from "./theme";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import SideBar from "./layout/Sidebar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProjectList from "./pages/ProjectList";
function App() {
  const [theme, colorMode] = useMode();
  const [t, setT] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {t ? (
            <>
              {" "}
              <SideBar />
              <main className="content">
                <Header />
                <Routes>
                  <Route path="/" element={<ProjectList />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </main>
            </>
          ) : (
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
