/* jshint esversion: 6 */
import axios from "axios";

const API = {};

API.fetchRooms = async () => {
  let rooms = {};
  try {
    const response = await axios({
      url: "http://localhost:4000/graphql",
      method: "post",
      data: {
        query: `
                query {
                  rooms {
                    id roomNo type price description pax image isOccupied
                    }
                  }
                `
      }
    });
   
    rooms = await response.data.data.rooms;
  } catch (err) {
    throw new Error(err);
  }
  return rooms.map(room => ({...room, isSelected: false}));
};

API.fetchHotels = async () => {
  let hotels = {};
  try {
    const response = await axios({
      url: "http://localhost:4000/graphql",
      method: "post",
      data: {
        query: `
                query{
                  hotels {
                    id name address distance price image cityId
                    }
                  }
                `
      }
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
      url: "http://localhost:4000/graphql",
      method: "post",
      data: {
        query: `
                query{
                    cities {
                      id city state
                    }
                  }
                `
      }
    });
   
    cities = await response.data.data.cities;
  } catch (err) {
    throw new Error(err);
  }
  return cities;
};


export default API;