import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './House.scss';
import PropTypes from 'prop-types';

function House(props) {
  const houseContent = (props.house !== '') 
    ? 
    <div className='house__crest'></div>
    :
    <div className='house__container'>
      <div className='house__title-container'>
        <h2 className='house__title'>Your Hogwarts House</h2>
      </div>
      <div className='house__middle-container'>
        <p className='house__middle-text'>Or</p>
      </div>
      <div className='house__ceremony-container'>
        <p className='house__ceremony-title'>The Sorting Ceremony</p>
        <p className='house__ceremony-text'>Answer truthfully, after all the hat&apos;s decision is final</p>
        <Link to='sorting' className='house__button'>Begin the experience</Link>
      </div>
    </div>
  ;

  return (
    <section className='house'>
      {houseContent}
    </section>
  );
  
}

House.propTypes = {
  house: PropTypes.string
};

export default withRouter(House);