import React from 'react';
import Champion from './Champion';

const ChampionList = ({ champions }) => {
	return(
        <div className='champion-container'>
            {
                champions.map((user, i) =>{
                    return(
                        <Champion 
                            key={i}
                            name={user.name}
                            title={user.title}
                            tags={user.tags}
                        />
                    );
                })
            }
        </div>
    );
}

export default ChampionList;