export const metadata = {
  title: "AC Repair & Installation Services in Navi Mumbai",
  description:
    "Looking for reliable AC repair, installation & servicing in Navi Mumbai? Apple Aircon offers fast, affordable & expert AC solutions.",
};

// "use client";  
import Home from "../components/Home";
import ServicesHighlight from "../components/ServicesHighlight";
import ServiceForm from "../components/ServiceForm";
import ChooseUs from "../components/ChooseUs";





export default function Page() {
  return (
    <>
    <Home />
    <ServicesHighlight />
    <ChooseUs />
<div id="serviceForm">
  <ServiceForm />
</div>


    </>

  );
}
