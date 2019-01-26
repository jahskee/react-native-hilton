/* jshint esversion: 6 */
import axios from 'axios';

const graphqlServer = 'http://kickstartapps.us:4000/graphql';
// const graphqlServer="http://localhost:4000/graphql";

const API = {};

API.addReservation = async (param) => {
  let reservation = {};
  try {
    const response = await axios({
      url: graphqlServer,
      method: 'post',
      data: {
        query: `
          mutation {
            saveReservation(
                    name: "${param.name}", phone: "${param.phone}", email: "${ param.email}", 
                    hotel: "${param.hotel}", address: "${param.address}",
                    arrival: "${param.arrival}", departure: "${param.departure}", totalAmount: ${param.totalAmount}
            ){ id name phone email hotel address arrival departure totalAmount }
          }
        `,
      },
    });

    reservation = await response.data.data.saveReservation;
  } catch (err) {
    throw new Error(err);
  }
  return reservation;
};

API.fetchReservations = async () => {
  let reservations = {};
  try {
    const response = await axios({
      url: graphqlServer,
      method: 'post',
      data: {
        query: `
                query {
                    reservations {
                      id name phone email hotel address arrival departure totalAmount
                    }
                  }
                `,
      },
    });

    reservations = await response.data.data.reservations;
  } catch (err) {
    throw new Error(err);
  }
  return reservations;
};

API.fetchRooms = async () => {
  let rooms = {};
  try {
    const response = await axios({
      url: graphqlServer,
      method: 'post',
      data: {
        query: `
                query {
                  rooms {
                    id roomNo type price description pax image isOccupied
                    }
                  }
                `,
      },
    });

    rooms = await response.data.data.rooms;
  } catch (err) {
    throw new Error(err);
  }
  return rooms.map(room => ({ ...room, isSelected: false }));
};

API.fetchHotels = async () => {
  let hotels = {};
  try {
    const response = await axios({
      url: graphqlServer,
      method: 'post',
      data: {
        query: `
                query{
                  hotels {
                    id name address distance price image cityId
                    }
                  }
                `,
      },
    });

    hotels = await response.data.data.hotels;
  } catch (err) {
    throw new Error(err);
  }
  return hotels;
};

API.fetchCities = async () => {
  let cities = {};
  try {
    const response = await axios({
      url: graphqlServer,
      method: 'post',
      data: {
        query: `
                query{
                    cities {
                      id city state
                    }
                  }
                `,
      },
    });

    cities = await response.data.data.cities;
  } catch (err) {
    throw new Error(err);
  }
  return cities;
};

export default API;
