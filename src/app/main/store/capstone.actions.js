import HTTPService from "../../config/httpservice";
// actions to perform from components

export const getMenusByStore = (id) => (dispatch) => {
  try {
    return HTTPService.findBySlang("store-menu", id);
  } catch {
    console.log('There is an error.')
  }
}

export const getMenus = () => (dispatch) => {
  try {
    return HTTPService.getAll("menu");
  } catch {
    console.log('There is an error.')
  }
}

export const getStores = (tag) => (dispatch) => {
  try {
    return HTTPService.get("store", tag);
  } catch {
    //
  }
}