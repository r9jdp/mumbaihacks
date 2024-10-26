import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./subcomponents/Navbar";
import SidebarApp from "./subcomponents/Sidebar";
import Card from "./subcomponents/Card";
import Barchart from "./subcomponents/Barchart";
import CardComponent from "./subcomponents/GenAi";

import PieChart from "./subcomponents/newPieChart";

export default function Trial() {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  const data = [
    { label: "Debt", value: 18 },
    { label: "Networth", value: 82 },
  ];
  return (
    isAuthenticated && (
      <div className="flex flex-col">
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

        <Navbar />
        <div>
          <div className="flex justify-between w-[82.2%]">
            <SidebarApp />
            <div className="mt-20">
              <Card />
              <div className="flex items-center">
                <Barchart />
                <PieChart data={data} />
              </div>
              {/* <CardComponent /> */}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
