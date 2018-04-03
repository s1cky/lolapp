import React from 'react';

const Card = ({ name, title, tags }) => {
	return(
		<div className='tc hashir tc dib br3 pa2 ma4 grow bw2 shadow-5'>
	      <img alt='champions' className='br3 grow bw2 shadow-5' src='http://via.placeholder.com/200x200' />
	      <div>
	        <dl className="lh-title pt3 ph1 mt0">
	          <dt className="f6 b">Name</dt>
	          <dd className="ml0">{name}</dd>
	          <dt className="f6 b mt2">Title</dt>
	          <dd className="ml0">{title}</dd>
	          <dt className="f6 b mt2">Tags</dt>
	          <dd className="ml0">{tags}</dd>
	        </dl>
	      </div>
	    </div>
	)
}



export default Card;