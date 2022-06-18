import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Header, AirbnbRating, Icon} from "react-native-elements";
import {RFValue} from "react-native-responsive-fontsize";
import  axios from "axios";

export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state = {
            movieDetails: {}
        };

    }
componentDidMount(){
    this.getMovie();

}
timeConvert(num){
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return `${hours} hrs ${minutes} mins`;

}
    
getMovie = () => {
    const URL = "https://localhost:5000/get-movie";
    axios 
    .get(URL)
    .then(response =>{
        let details = response.data.data;
        details["duration"] = this.timeConvert(details.duration);
        this.setState({movieDetails: details});

    })
    .catch(error => {
        console.log(error.message);
    });
};
  likedMovie = () =>{
    const URL = "https://localhost:5000/liked-movie";
    axios
    .post(URL)
    .then(response =>{
        this.getMovie();
    })
    .catch(error =>{
        console.log(error.message);
    });
  };

  notlikedMovie = () =>{
    const URL = "https://localhost:5000/not-liked-movie";
    axios
    .post(URL)
    .then(response =>{
        this.getMovie();
    })
    .catch(error =>{
        console.log(error.message);
    });
  };

  notWatchedMovie = () =>{
    const URL = "https://localhost:5000/not-watched-movie";
    axios
    .post(URL)
    .then(response =>{
        this.getMovie();
    })
    .catch(error =>{
        console.log(error.message);
    });
  };

render(){
    const{movieDetails} = this.state;
    if(movieDetails.post_link){
        const{
            post_link,
            title,
            release_date,
            duration,
            overview,
            rating
        } = movieDetails;

        return(
            < view style = {styles.container}>
                < view style = {styles.headerContainer}>
                    
                </view>
            </view>
        )
    }
}
}