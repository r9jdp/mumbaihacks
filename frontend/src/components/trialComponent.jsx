import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./subcomponents/Navbar";
import SidebarApp from "./subcomponents/Sidebar";
import Card from "./subcomponents/Card";
import Barchart from "./subcomponents/Barchart";
import CardComponent from "./subcomponents/GenAi";
import axios from "axios";
import PieChart from "./subcomponents/newPieChart";
import { useEffect, useState } from "react";
import { convertToJSON } from "../../../backend/utils/Parser";

export default function Trial() {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  const [fetchedData, setData] = useState(null);
  const email = "rajdeep.p@somaiya.edu";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:3000/getData", {
          email, // Sending the email as part of the request body
        });

        // Assuming convertToJSON is a function you defined to parse Aidata
        const aidata = await convertToJSON(response.data.Aidata);

        // Set the state with the necessary structure
        await setData({
          status: response.data.status,
          data: response.data.data,
          Aidata: aidata,
        });
        console.log("FetchedData", {
          status: response.data.status,
          data: response.data.data,
          Aidata: aidata,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetch function
  }, [email]); // Add email as a dependency if it can change

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
              <CardComponent />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
