import http from './request';

export const getCoinsList = () => {
    return dispatch => {
        http('get', ' https://min-api.cryptocompare.com/data/all/coinlist')
            .then(res => {
                let arrayNamesCoins = Object.keys(res.Data).slice(50, 70);

                getPriceByCoin(arrayNamesCoins)
                    .then(resPrice => {
                        let newCoinsList = arrayNamesCoins.map(key => {
                            return Object.assign({}, res.Data[key], resPrice[key])
                        });

                        return dispatch({
                            type: 'ADD_COINS',
                            payload: newCoinsList
                        });
                    });
            });
    };
};

export const getPriceByCoin = data => {
    return http('get', `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${data.join(',')}&tsyms=USD`)
};