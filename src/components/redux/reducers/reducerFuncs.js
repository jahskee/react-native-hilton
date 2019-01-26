/* jshint esversion: 6 */

/* This makes reducer functions more testable */
const reducerFuncs = {
  toggleRoomSelected(action, rooms) {
    return rooms.map((room) => {
      // debugger;
      if (room.roomNo === action.payload.roomNo) {
        return { ...room, isSelected: !room.isSelected };
      }
      return room;
    });
  },
};

export default reducerFuncs;
