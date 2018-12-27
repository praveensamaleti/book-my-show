import React from 'react';
import { connect } from "react-redux";
import Select from 'react-select';
import store from '../../store/index';
import { setGenre } from '../../actions/index';


const mapStateToProps = state => {
    return { genres: state.genres,
             selectedGenre:state.parameters.selectedGenre };
  };
class Genre extends React.Component{
    
    handleChange(selectedOption){
        
        store.dispatch(setGenre(selectedOption.value));
    }
    optionCreator(genres){
        return genres.map(genre=>({value:genre.id,label:genre.name}));
    }
    render(){
        const genres = this.props.genres;
        const selectedOption = this.props.selectedGenre;
        return(
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.optionCreator(genres)}
            />
        );
    }
}
export default connect(mapStateToProps)(Genre);
