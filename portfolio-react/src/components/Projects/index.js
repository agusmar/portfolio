import React from 'react';
import './style.scss';
 

class Projects extends React.Component {
  render() {
    return (
      <div className="projects"> 
      <img className="image" src={this.props.imageURL}/>
      </div>
    );
  }
}
export default Projects;