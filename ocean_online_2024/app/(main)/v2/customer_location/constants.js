const getBrinkSite = {
    getBrinkData() {
      return [
        {
          id: "2",
          name: "Brink Thailand 2",
          lob: "CIT",
          serviceType: "Pick Up",
          dayOfWeek: "Monday",
          startTime: "00.00",
          endTime: "23.59",
          spotTime: false,
          routeGroup: "R3072",
        },
        {
          id: "3",
          name: "Brink Thailand 2",
          lob: "CIT",
          serviceType: "Pick Up",
          dayOfWeek: "Monday",
          startTime: "00.00",
          endTime: "23.59",
          spotTime: false,
          routeGroup: "R3072",
        },
      ];
    },
    // getBrinkDataMain() {
    //   return [
    //     {
    //       id: "1",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Delivery",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World",
    //       provinceState: "Thailand",
    //       districtCity: "Texas",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "2",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Delivery",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 2",
    //       provinceState: "Thailand",
    //       districtCity: "Texas",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "3",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Delivery",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 3",
    //       provinceState: "Thailand",
    //       districtCity: "Sai Mai",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "4",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Delivery",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 4",
    //       provinceState: "Thailand",
    //       districtCity: "Sai Mai",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "5",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Delivery",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 5",
    //       provinceState: "Thailand",
    //       districtCity: "Sai Mai",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "6",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Delivery",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 6",
    //       provinceState: "Thailand",
    //       districtCity: "Sai Mai",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "7",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Delivery",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 7",
    //       provinceState: "Thailand",
    //       districtCity: "Sai Mai",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "8",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Delivery",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 8",
    //       provinceState: "Thailand",
    //       districtCity: "Sai Mai",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "9",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Delivery",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 9",
    //       provinceState: "Thailand",
    //       districtCity: "Sai Mai",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "10",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Delivery",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 10",
    //       provinceState: "Thailand",
    //       districtCity: "Sai Mai",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "11",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Delivery",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 11",
    //       provinceState: "Thailand",
    //       districtCity: "Sai Mai",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "12",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Delivery",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 12",
    //       provinceState: "Thailand",
    //       districtCity: "Sai Mai",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "13",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Delivery",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 13",
    //       provinceState: "Thailand",
    //       districtCity: "Sai Mai",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "14",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Delivery",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 14",
    //       provinceState: "Thailand",
    //       districtCity: "Sai Mai",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "15",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Pick Up",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 15",
    //       provinceState: "Thailand",
    //       districtCity: "Bangkok",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "16",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Pick Up",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 16",
    //       provinceState: "Thailand",
    //       districtCity: "Bangkok",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "17",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Pick Up",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 17",
    //       provinceState: "Thailand",
    //       districtCity: "Bangkok",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "18",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Pick Up",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 18",
    //       provinceState: "Thailand",
    //       districtCity: "Bangkok",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "19",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Pick Up",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 19",
    //       provinceState: "Thailand",
    //       districtCity: "Bangkok",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "20",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Pick Up",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 20",
    //       provinceState: "Thailand",
    //       districtCity: "Texas",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //     {
    //       id: "21",
    //       name: "Brink Thailand 1",
    //       lob: "CIT",
    //       serviceType: "Pick Up",
    //       dayOfWeek: "Monday",
    //       startTime: "00.00",
    //       endTime: "23.59",
    //       spotTime: false,
    //       routeGroup: "R3072",
    //       locationCode: "WOC",
    //       locationName: "Safari World 21",
    //       provinceState: "Thailand",
    //       districtCity: "Texas",
    //       postalCode: "10220",
    //       userCreated: "Admin",
    //       dtCreated: "20/02/2024",
    //       userModified: "Admin",
    //       dtModified: "22/02/2024",
    //     },
    //   ];
    // },
    getBrinkDataMain() {
      const brinkDataMain = [];
    
      for (let i = 1; i <= 99; i++) {
        brinkDataMain.push({
          id: i.toString(),
          name: `Brink Thailand ${i}`,
          lob: "CIT",
          serviceType: "Delivery",
          dayOfWeek: "Monday",
          startTime: "00.00",
          endTime: "23.59",
          spotTime: false,
          routeGroup: "R3072",
          locationCode: "WOC",
          locationName: `Safari World ${i}`,
          provinceState: i % 2 === 0 ? "United States" : "Thailand",
          districtCity: i % 2 === 0 ? "Texas" : "Sai Mai",
          postalCode: "10220",
          userCreated: "Admin",
          dtCreated: "20/02/2024",
          userModified: "Admin",
          dtModified: "22/02/2024",
        });
      }
      return brinkDataMain;
    }
  };
  export default getBrinkSite;