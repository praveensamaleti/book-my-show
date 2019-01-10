import React from 'react';

import leftArrow from '../icons/leftArrow.png';
import rightArrow from '../icons/rightArrow.png';
import Movie from '../components/HomePage/Movie.jsx';

export default function Pagination ( WrappedComponent ) {
    return class some extends React.Component {
        state = {
            pageNumber : 0
        }
        handleLeftArrow = () => {
            this.setState(function(state) {
                return {
                    pageNumber : state.pageNumber - 1
                };
            });
        }
        handlRightArrow = () => {
            this.setState(function(state){
                return {
                    pageNumber : state.pageNumber + 1
                }
            })
        }
        render(){
            let originalList = this.props.movieList;
            console.log("Praveen debuug: ", JSON.stringify(this.props));
            let listSize = originalList.length ;
            let startIndex = this.state.pageNumber ;
            let endIndex = startIndex + 4 ;
            let list = originalList.slice(startIndex,endIndex);
            let leftImage = <img src={leftArrow} alt="" onClick={ () => this.handleLeftArrow() }/>;
            let rightImage = <img src={rightArrow} alt="" onClick={ () => this.handlRightArrow() }/>;
            return(
                <div className="Pagination">
                    { startIndex !== 0 && leftImage }
                    <WrappedComponent list={list}/>
                    { endIndex !== listSize && rightImage }
                </div>
            );
        }
    }
}