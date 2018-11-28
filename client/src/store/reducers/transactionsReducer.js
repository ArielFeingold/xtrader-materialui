import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../assets/utility';

const initialState = {
  userTransactions: [],
  loading: false,
  errors: null
};

const getTransactionsStart = ( state, action ) => {
  return updateObject( state, {
    errors: null,
    loading: true
  });
}


const getTransactionsSuccess = ( state, action ) => {
  return updateObject( state, {
    errors: null,
    loading: false,
    userTransactions: action.userTransactions
   });
}

const getTransactionsFail = ( state, action ) => {
  return updateObject( state, {
    errors: action.errors,
    loading: false
    }
  );
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_TRANSACTIONS_START: return getTransactionsStart(state, action);
        case actionTypes.GET_TRANSACTIONS_SUCCESS: return getTransactionsSuccess(state, action);
        case actionTypes.GET_TRANSACTIONS_FAIL: return getTransactionsFail(state, action);

        default:
            return state;
    }
};

export default reducer;
