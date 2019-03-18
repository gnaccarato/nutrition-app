import React from 'react';

class Form extends React.Component {
    render() {
        return(
            <div class="search_form">
                <form onSubmit={this.props.getNutrition}>
                    <input type="text" name="food" placeholder="Enter Food..." className="form-control input-sm"></input>
                    <button className="btn btn-block btn-primary">Search <i class="fas fa-search"></i></button>
                </form>
            </div>
        )
    }
}

export default Form;