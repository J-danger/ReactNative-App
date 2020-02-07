import React, { Component } from 'react'

import {
    Image,
    Button,
    Alert,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';

class Table extends Component {
    constructor(props) {
      super(props);        
      this.state = {
        error: null,
        isLoaded: false,
      };
          
    }

    componentDidMount() {
      this._isMounted = true;
      fetch('https://api.gemini.com/v1/pubticker/btcusd')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              btcGemini: parseFloat(result.last).toFixed(2)
            });
          },           
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
        .then(fetch('https://api.binance.us/api/v3/ticker/price?symbol=BTCUSDT')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              btcBinance: parseFloat(result.price).toFixed(2)
            });
          },           
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
        ).then(fetch('https://api.coinbase.com/v2/prices/spot?currency=USD')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              btcCoinBase: parseFloat(result.data.amount).toFixed(2)
            });
          },           
          (error) => {
            this.setState({
              
              error
            });
          }
        )
        ).then(fetch('https://api.kraken.com/0/public/Ticker?pair=XBTUSD')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              btcKraken: parseFloat(result.result.XXBTZUSD.o).toFixed(2)
            });
          },            
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
        );
        };

        componentWillUnmount() {
          this._isMounted = false;
        };

        render(){

          let minMax = [this.state.btcBinance, this.state.btcCoinBase, this.state.btcKraken];
          let max = Math.max(...minMax);
          let min = Math.min(...minMax);
          let spread = (max - min).toFixed(2);
          if (this.state.isLoaded){
            return(
              <View style={styles.spreadContainer}>
                <Text style={styles.priceText}>Spread: ${spread}</Text>
                <Text style={styles.priceText}>Gemini: ${this.state.btcGemini}</Text>
                <Text style={styles.priceText}>Binance: ${this.state.btcBinance}</Text>
                <Text style={styles.priceText}>CoinBase: ${this.state.btcCoinBase}</Text>
                <Text style={styles.priceText}>Kraken: ${this.state.btcKraken}</Text>
              </View>
            );

          } else {
            return(
              <Text>Loading...</Text>
            );
          };
        };
    }

    export default Table

    
const styles = StyleSheet.create({
    priceText: {
      color: 'white',
      fontSize: 25
    }, 
    spreadContainer: {
      marginTop: '25%'
    }
    
  });