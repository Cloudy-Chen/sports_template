/**
 * Created by saionara1 on 6/29/17.
 */
import * as actions from "../actions/action-types";

export default function rootReducer(state, action = {}) {
  switch (action.type) {
    case actions.SET_LOADING:
      return state.set('loading', action.loading);
    default:
      return state
  }
}
