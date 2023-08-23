export const addContact = (contact) => {
    return {
      type: 'ADD_CONTACT',
      payload: contact,
    };
  };
  
  export const editContact = (contact) => {
    return {
      type: 'EDIT_CONTACT',
      payload: contact,
    };
  };
  
  export const deleteContact = (contactId) => {
    return {
      type: 'DELETE_CONTACT',
      payload: contactId,
    };
  };