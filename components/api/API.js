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

export default API;