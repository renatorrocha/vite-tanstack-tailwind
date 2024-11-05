import QueryProvider from "./query";
import RouterApp from "./router";

export default function App() {
    return (
        <QueryProvider>
            <RouterApp />
        </QueryProvider>
    );
}
