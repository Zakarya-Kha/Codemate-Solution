import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Solution from "./Pages/Solution"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Layout from "./Conmponents/Layout"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Digital from "./Conmponents/Services/Digital"
import DigitalAnanlytics from "./Conmponents/Services/DigitalAnanlytics"
import AlliancesEcosystems from "./Conmponents/Services/AlliancesEcosystems"
import BusinessCasePricing from "./Conmponents/Services/BusinessCasePricing"
import Management from "./Conmponents/Services/Management"
import CustomerExperience from "./Conmponents/Services/CustomerExperience"
import Policy from "./Conmponents/Services/Policy"
import MobileApplications from "./Conmponents/Services/MobileApplications"
import DigitalSupport from "./Conmponents/Services/DigitalSupport"
import CloudServices from "./Conmponents/Services/CloudServices"
import LearningManagementSystem from "./Conmponents/Solutions/LearningManagmentSystem"
import EnterpriseResource from "./Conmponents/Solutions/EnterpriseResource"
import HumanCaptial from "./Conmponents/Solutions/HumanCaptial"
import TrafficMobility from "./Conmponents/Solutions/TrafficMobility"
import DeliveryLogistics from "./Conmponents/Solutions/DeliveryLogistics"
import WarehouseManagment from "./Conmponents/Solutions/WarehouseManagment"
import PointOfSales from "./Conmponents/Solutions/PointOfSales"
import CustomerReletionship from "./Conmponents/Solutions/CustomerReletionship"
import EcommerceMarketplace from "./Conmponents/Solutions/EcommerceMarketplace"
import WarehouseInventory from "./Conmponents/Home/WarehouseInventory"
import MobileApplication from "./Conmponents/Home/MobileApplication"
import WebMobApp from "./Conmponents/Home/WebMobApp"
import WareHouseMaanagement from "./Conmponents/Home/WareHouseMaanagement"
import EcommerceMarket from "./Conmponents/Home/EcommerceMarket"
import HumanResouce from "./Conmponents/Home/HumanResouce"


function App() {
  const router = createBrowserRouter([
   {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",  
        element: <Home />
      },
      {
        path: "/about", 
        element: <About />
      },
      {
        path: "/contact",  
        element: <Contact />
      },


      // home page case studies

      {
        path: "/WarehouseInventory",
        element: <WarehouseInventory />
      },
      {
        path: "/WebMobileApplication",
        element: <WebMobApp />
      },
      
      {
        path: "/MobileApplication",
        element: <MobileApplication />
      },

      {
        path: "/WareHouseMaanagement",
        element: <WareHouseMaanagement />
      },
      {
        path: "/EcommerceMarket",
        element: <EcommerceMarket />
      },
      {
        path: "/HumanResouce",
        element: <HumanResouce />
      },


      // Service start
      {
        path: "/services", 
        element: <Services />
      },
      {
        path: "/Digital", 
        element: <Digital />
      },
      {
        path: "/digitalAnanlytics", 
        element: <DigitalAnanlytics />
      },
      {
        path: "/AlliancesEcosystems",
        element: <AlliancesEcosystems />
      },
      {
        path: "/BusinessCasePricing",
        element: <BusinessCasePricing/>
      },
      {
        path: "/management",
        element: <Management />
      },
      {
        path: "/CustomerExperience",
        element: <CustomerExperience/>
      },
      {
        path: "/policy",
        element: <Policy/>
      },
      {
        path: "/MobileApplications",
        element: <MobileApplications/>
      },
      {
        path: "/DigitalSupport",
        element: <DigitalSupport />
      },
      {
        path: "/CloudServices",
        element: <CloudServices />
      },

      // serviced End





      // Solution start

      {
        path: "/solution", 
        element: <Solution />
      },
      {
        path: "/LearningManagmentSystem",
        element: <LearningManagementSystem/>
      },
      {
        path: '/EnterpriseResource',
        element: <EnterpriseResource/>
      },
      {
        path: '/HumanCapital',
        element: <HumanCaptial/>
      },
      {
        path: '/TrafficMobility',
        element: <TrafficMobility/>
      },
      {
        path: '/DeliveryLogistic',
        element: <DeliveryLogistics/>
      },
      {
        path: '/WarehouseManagment',
        element: <WarehouseManagment/>
      },
      {
        path: '/PointOfSales',
        element: <PointOfSales/>
      },
      {
        path: '/CustomerReletionship',
        element: <CustomerReletionship/>
      },
      {
        path: '/EcommerceMarketplace',
        element: <EcommerceMarketplace/>
      },

    ]
   }

  ])
 

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
