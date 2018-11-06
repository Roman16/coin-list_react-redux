import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCoinsList} from '../actions/coins';
import CoinsList from './CoinsList';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    componentDidMount() {
        this.props.getAllCoins();
    };

    render() {
        return (
            <div >
                <h1 style={{display: 'block', textAlign: 'center'}}>Coin List</h1>

                <CoinsList
                    list={this.props.list}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.coinsList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getAllCoins: () => {
            dispatch(getCoinsList());
        },

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);