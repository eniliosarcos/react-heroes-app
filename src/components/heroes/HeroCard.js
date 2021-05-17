import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import './HeroCard.css'


export const HeroCard = ({hero}) => {
    return (
        <Link to={`./hero/${hero.id}`} className="my-card">
        <img src={heroImages(`./${hero.id}.jpg`).default} className="img img-responsive" alt={hero.superhero}/>
        <div className="profile-name">{hero.superhero}</div>
        <div className="profile-position">{hero.alter_ego}</div>
        <div className="profile-overview">
            <div className="profile-overview">
                <div className="row">
                    <div className="col-ms-4">
                        <h3>{hero.publisher}</h3>
                        <p>First Appearance: <br />{hero.first_appearance}</p>
                        {
                            (hero.alter_ego !== hero.characters)
                            && <p>{hero.characters}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    </Link>
    )
}
