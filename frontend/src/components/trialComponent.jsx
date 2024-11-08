import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./subcomponents/Navbar";
import SidebarApp from "./subcomponents/Sidebar";
import Card from "./subcomponents/Card";
import Barchart from "./subcomponents/Barchart";
import CardComponent from "./subcomponents/GenAi";
import axios from "axios";
import PieChart from "./subcomponents/newPieChart";
import { useEffect, useState } from "react";
import styles from "./trialComponent.module.css"; 


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
        const aidata = response.data.Aidata

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
      <div className={styles.container}>
        {/* <div classname={styles.sidebar}>
          <SidebarApp />
        </div> */}
        <div className={styles.layout}>
          <Navbar />
          <div className={styles.card}>
            <Card />
          </div>
          <div className={styles.charts}>
            <Barchart />
            <PieChart data={data} />
          </div>
          <div className={styles.genai}>
            <CardComponent />
          </div>  
        </div>

      </div>
    )
  );
}
