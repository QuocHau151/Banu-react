import "@/assets/css/tailwind.css";
import { useRoutes } from "react-router-dom";
import { routers } from "./routers";
import { Suspense, useEffect } from "react";

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //     mirror: true,
  //   });
  // }, []);
  setTimeout(function () {
    if (document.querySelectorAll("[data-aos]").length > 0) {
      AOS.init({
        duration: 1200,
        mirror: true,
      });
    }
  }, 1000);
  const element = useRoutes(routers);

  return <Suspense fallback={<div>App Loading....</div>}>{element}</Suspense>;
}

export default App;
