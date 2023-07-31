import { QueryClient, QueryClientProvider } from "react-query";
import AppRoutes from "./router/AppRoutes";
import { ThemeProvider } from "styled-components";
import { theme } from "./app/config/Theme";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
