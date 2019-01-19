/* jshint esversion: 6 */

import * as cloneDeep from "lodash/cloneDeep";

/* This makes reducer functions more testable */
const reducerFuncs = {
  toggleRoomSelected: function(action, rooms) {
    return rooms.map(room => {
      //debugger;
      if (room.roomNo === action.payload.roomNo) {
        return { ...room, isSelected: !room.isSelected };
      } else {
        return room;
      }
    });
  }
};

export default reducerFuncs;
