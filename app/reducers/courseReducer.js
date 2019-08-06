import * as actions from "../actions/action-types";
import {RefreshState} from "../components/RefreshListView";
import constants from "../resources/constants";
import {removeItemFromList} from "../utils/tools";

/**
 * courseReducer.js
 */

export default function courseReducer(state, action = {}) {
    switch (action.type) {

        case actions.GET_COURSE_SUCCESS:
            return state.withMutations(state => state
                .set('datasError', false)
                .set('courseList',action.data)
                .set('dataResponse',constants.GET_COURSE_SUCCESS));

        case actions.GET_COURSE_FAIL:
            return state.withMutations(state => state
                .set('datasError', true)
                .set('refreshState',RefreshState.Failure)
                .set('dataResponse',constants.GET_COURSE_FAIL));

        case actions.GET_COURSE_DETAIL_SUCCESS:
            return state.withMutations(state => state
                .set('data',action.data)
                .set('dataResponse',constants.GET_DATA_DETAIL_SUCCESS));

        case actions.GET_COURSE_DETAIL_FAIL:
            return state.withMutations(state => state
                .set('dataResponse',constants.GET_DATA_DETAIL_FAIL));

        case actions.ADD_COURSE_SUCCESS:
            return state.withMutations(state => state
                .set('dataResponse',constants.ADD_DATA_SUCCESS));

        case actions.ADD_COURSE_FAIL:
            return state.withMutations(state => state
                .set('dataResponse',constants.ADD_DATA_FAIL));

        case actions.EDIT_COURSE_SUCCESS:
            return state.withMutations(state => state
                .set('dataResponse',constants.EDIT_DATA_SUCCESS));

        case actions.EDIT_COURSE_FAIL:
            return state.withMutations(state => state
                .set('dataResponse',constants.EDIT_DATA_FAIL));

        case actions.DELETE_COURSE_SUCCESS:
            return state.withMutations(state => state
                .set('dataResponse',constants.DELETE_DATA_SUCCESS)
                .set('courseList', removeItemFromList(state.get('courseList'),action.data)));

        case actions.DELETE_COURSE_FAIL:
            return state.withMutations(state => state
                .set('dataResponse',constants.DELETE_DATA_FAIL));

        case actions.RESET_COURSE_RESPONSE:
            return state.withMutations(state => state
                .set('dataResponse',constants.INITIAL));

        case actions.RESET_COURSE:
            return state.withMutations(state => state
                .set('dataResponse',constants.INITIAL)
                .set('courseList',[])
                .set('course',{})
                .set('refreshState',RefreshState.Idle)
                .set('datasError',false));
        case actions.SET_COURSE:
            return state.withMutations(state => state
                .set('course',action.course));
        default:
            return state
    }
}
