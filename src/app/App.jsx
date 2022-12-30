import { Provider } from "react-redux";
import { useRoutes } from "react-router-dom";
import { MatxTheme } from "./components";
import { AuthProvider } from "./contexts/JWTAuthContext";
import { SettingsProvider } from "./contexts/SettingsContext";
import { Store } from "./redux/Store";
import routes from "./routes";
import { Toaster } from "react-hot-toast";
import { useState, createContext, useEffect } from "react";
import { getProjectsList } from "./firabase";

export const ProjectContext = createContext();
const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  async function getItem() {
    getProjectsList(setItems);
  }

  const content = useRoutes(routes);
  return (
    <ProjectContext.Provider value={items}>
      <Provider store={Store}>
        <Toaster />
        <SettingsProvider>
          <MatxTheme>
            <AuthProvider>{content}</AuthProvider>
          </MatxTheme>
        </SettingsProvider>
      </Provider>
    </ProjectContext.Provider>
  );
};

export default App;
