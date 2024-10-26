import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trial from "./components/trialComponent";

function App() {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Trial />,
    },
  ]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center flex-col">
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-3xl m-5">Dashboard is loading....</h1>
      </div>
    );
  }
  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  return <RouterProvider router={router} />;
}

export default App;
