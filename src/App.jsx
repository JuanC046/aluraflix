import RouterApp from "./routes";
import { DataContextProvider } from "./context/DataContext";
function App() {
    return (
        <>
            <DataContextProvider>
                <RouterApp />
            </DataContextProvider>
        </>
    );
}

export default App;
