import { UPDATE_CONTACT, USER_REGISTERED } from "./types";

export const user_action = (payload) => {
  return {
    type: USER_REGISTERED,
    payload,
  };
};

export const update_contact = () => {
  return {
    type: UPDATE_CONTACT,
  };
};
