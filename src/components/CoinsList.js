import React from 'react';

import Coin from './Coin';

const CoinsList = ({list}) => {
    return (
        <div>
            <table className="table table-hover mx-auto w-50 p-3 shadow p-3 mb-5 bg-white rounded">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Coin name</th>
                    <th scope="col">Price</th>
                </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => {
                        return (
                            <Coin
                                key={index}
                                item={item}
                                index={index}
                            />
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
};

export default CoinsList;