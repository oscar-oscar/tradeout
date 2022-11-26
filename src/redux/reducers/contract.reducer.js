import { combineReducers } from 'redux';

const defaultNewContract = {
    firstPartyType: '',
    secondPartyType: '',
    contractTitle: '',
    itemName: '',
    itemDescription: '',
    itemPrice: 0,
    pickupLocation: '',
    pickupDate: '',
    contractDeadline: '',
    contractNotes: '',
    itemImage: '',
    itemImageDescription: '',
    firstPartySignature: '',
    contractKey: ''
};

const newContractDetails = (state = defaultNewContract, action) => {
    console.log('in newContractDetails reducer');
    if(action.type === 'SET_NEW_CONTRACT_DETAILS') {
        return action.payload;
    } else if (action.type === 'UNSET_USER') {
        return defaultNewContract;
    }
    return state;
}

const userContracts = (state = [], action) => {
    console.log('in userContracts reducer');
    if(action.type === 'SET_CONTRACTS') {
        return action.payload;
    } else if (action.type === 'UNSET_USER') {
        return [];
    }
    return state;
  };

export default combineReducers({
    newContractDetails,
    userContracts
});