import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./subcomponents/Navbar";
import SidebarApp from "./subcomponents/Sidebar";
import Card from "./subcomponents/Card";
import Barchart from "./subcomponents/Barchart";
import PieArcLabel from "./subcomponents/PieChart";
import CardComponent from "./subcomponents/GenAi";

export default function Trial() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  console.log(user);
  return (
    isAuthenticated && (
      <>
        {/* <h1 className="font-black">Rjdp</h1>
        <button
          onClick={() =>
            logout({
              logoutParams: {
                returnTo: `${window.location.origin}`,
              },
            })
          }
        >
          Log Out
        </button> */}

        <SidebarApp />
        <div className="flex flex-col">
          <Navbar />
          <Card />
          <div className="flex ">
            <Barchart />
            <PieArcLabel />
          </div>
          <CardComponent />
        </div>
      </>
    )
  );
}
