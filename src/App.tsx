import { QueryClient, QueryClientProvider } from "react-query";
import BaseRouter from "./routes/BaseRouter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BaseRouter />
  </QueryClientProvider>
);

export default App;
