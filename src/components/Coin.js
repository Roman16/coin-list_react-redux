import React from 'react';

const Coin = ({item, index}) => {
    let BaseImageUrl = 'https://www.cryptocompare.com';
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>
                <img style={{width: '20px', margin: '0 5px 0 0'}}
                     src={BaseImageUrl + item.ImageUrl}
                     alt=''
                />
                {item.Name}
            </td>
            <td>{item.USD}</td>

        </tr>
    )
};

export default Coin;