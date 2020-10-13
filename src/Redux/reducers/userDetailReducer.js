const initUserDetailData = []

const userDetailReducer = (state=initUserDetailData, action) => {
    switch (action.type) {
        case 'USER-DETAIL-ACTION-ADD':
            return [...action.payload];
            break;
        default:
            return state
    }

}

export default userDetailReducer