import React from 'react';

class Nutrition extends React.Component {
    render() {
        return(
            <div className="nutrition_info">
               {this.props.calories && <h5>Calories: <span> {this.props.calories}</span></h5>}
               {this.props.carbs && <h5>Carbs: <span> {this.props.carbs}</span></h5>}
               {this.props.protein && <h5>Protein: <span>{this.props.protein}</span></h5>}
               {this.props.fat && <h5>Fat: <span>{this.props.fat}</span></h5>}
               {this.props.error && <h5><span>{this.props.error}</span></h5>}
            </div>
        )
    }
}

export default Nutrition;