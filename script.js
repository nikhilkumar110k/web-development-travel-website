const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    import { driver } from "driver.js";
    import "driver.js/dist/driver.css"; 
    const driver= new Driver();
    driver.defineSteps([
      {
        element: '#aboutus',
        popover:{
          className:'aboutus1',
          title: 'About us',
          description:'click on this page to know more about us',
          position:'bottom'
        }
      },
      {
        element: '#destination',
        popover:{
          className:'destination1',
          title: 'Find your destination',
          description:'click on this page to find your dream destination',
          position:'top'
        }
      },
      {
        element: '#login',
        popover:{
          className:'login1',
          title: 'login page',
          description:'login to travel to your dream destination',
          position:'bottom'
        }
      },
    ]);
    driver.start();
