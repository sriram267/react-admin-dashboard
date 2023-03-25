import { ColorModeContext, useMode} from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./screens/global/Topbar";
// import Dashboard  from "./screens/dashboard";
import Sidebar from "./screens/global/Sidebar";
import Team  from "./screens/team";
import Invoices  from "./screens/invoices";
import Contacts  from "./screens/contacts";
// import Bar  from "./screens/bar";
import Form  from "./screens/form";
// import Line  from "./screens/line";
// import Pie  from "./screens/pie";
// import FAQ  from "./screens/fAQ";
// import Geography  from "./screens/geography";
import Calendar  from "./screens/calendar";
 
const App = () => {
  const [theme , colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/Sidebar" element={<Sidebar />} />
              <Route path="/Team" element={<Team />} />
              <Route path="/Contacts" element={<Contacts />} />
              <Route path="/Invoices" element={<Invoices />} />
              <Route path="/Form" element={<Form />} />
              <Route path="/Calendar" element={<Calendar />} />
              {/* 
              
              <Route path="/Bar" element={<Bar />} />
              
              <Route path="/Line" element={<Line />} />
              <Route path="/Pie" element={<Pie />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/Geography" element={<Geography />} />
               */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  
  )
}

export default App;


