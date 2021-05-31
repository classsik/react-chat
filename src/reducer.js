/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case "JOINED":
      return {
        ...state,
        joined: true,
        roomId: action.payload.roomId,
        username: action.payload.username,
      };

    default:
      return state;
  }
};
