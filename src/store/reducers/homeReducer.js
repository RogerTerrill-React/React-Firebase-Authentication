const initState = {
  homes: [
    {
      id: '1',
      address: '1048 S Sundance Dr',
      city: 'Anaheim',
      state: 'CA',
      zipcode: '92808',
      overview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eum quos repudiandae aperiam dolore quidem necessitatibus, minima excepturi quae iusto saepe porro nulla perferendis cumque distinctio sapiente ipsam debitis reprehenderit!',
      monthlyRent: 2000,
      sqft: 1200,
      bedrooms: 2,
      bathrooms: 2,
      parkingSpots: 1,
      image1Link: 'https://images.beazer.com/452ad1b7-5aa6-41df-904b-f1e07761e2ce-c'
    },
    {
      id: '2',
      address: '1049 S Sundance Dr',
      city: 'Anaheim',
      state: 'CA',
      zipcode: '92808',
      overview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eum quos repudiandae aperiam dolore quidem necessitatibus, minima excepturi quae iusto saepe porro nulla perferendis cumque distinctio sapiente ipsam debitis reprehenderit!',
      monthlyRent: 3000,
      sqft: 1500,
      bedrooms: 3,
      bathrooms: 2.5,
      parkingSpots: 2,
      image1Link: 'https://cdn.mihomes.com/-/media/Images/MIHomes/Products/charlotte/Communities/allen-mills/7-21-17/CommunityExterior3.ashx?ts=20170721122140'
    },
    {
      id: '3',
      address: '1050 S Sundance Dr',
      city: 'Anaheim',
      state: 'CA',
      zipcode: '92808',
      overview:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eum quos repudiandae aperiam dolore quidem necessitatibus, minima excepturi quae iusto saepe porro nulla perferendis cumque distinctio sapiente ipsam debitis reprehenderit!',
      monthlyRent: 2300,
      sqft: 1454,
      bedrooms: 3,
      bathrooms: 2.5,
      parkingSpots: 2,
      image1Link: 'https://images.beazer.com/347809a3-364c-4f35-a938-ccf04b6d1ff7-c'
    }
  ]
};

const homeReducer = (state = initState, action) => {
  return state;
};

export default homeReducer;
