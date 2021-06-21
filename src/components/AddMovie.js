import React, { useRef, useState, Fragment } from 'react';

import classes from './AddMovie.module.css';

function AddMovie(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');
  const [btnShow, setBtnShow] = useState(true);

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
    setBtnShow(false)
  }

  return (

    <Fragment>
      {
        btnShow && 
        <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='opening-text'>Opening Text</label>
          <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='date'>Release Date</label>
          <input type='text' id='date' ref={releaseDateRef} />
        </div>
        <button>Add Movie</button>
        </form>
      }
      
    </Fragment>

  );
}

export default AddMovie;
