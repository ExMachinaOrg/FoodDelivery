import { ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import theme from "./shared/Theme";
import Header from "./components/Header/Index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </ThemeProvider>
  );
}
export default App;
