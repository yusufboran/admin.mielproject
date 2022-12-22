import { Provider } from "react-redux";
import { useRoutes } from "react-router-dom";
import { MatxTheme } from "./components";
import { AuthProvider } from "./contexts/JWTAuthContext";
import { SettingsProvider } from "./contexts/SettingsContext";
import { Store } from "./redux/Store";
import routes from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  const content = useRoutes(routes);
  return (
    <Provider store={Store}>
      <Toaster />
      <SettingsProvider>
        <MatxTheme>
          <AuthProvider>{content}</AuthProvider>
        </MatxTheme>
      </SettingsProvider>
    </Provider>
  );
};

export default App;
