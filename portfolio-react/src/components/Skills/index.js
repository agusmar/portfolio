import React from 'react';
import './style.scss';

class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <p>{this.props.skillsDescription}</p>
      </div>
    );
  }
}
export default Skills;