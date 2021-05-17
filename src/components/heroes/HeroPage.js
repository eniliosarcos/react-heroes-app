import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroPage = ({history}) => {

    const {heroeId} = useParams();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    if(!hero){
        return <Redirect to="/" />
    }
    const handleClick = () => {

        if(history.length <= 2){

            switch (hero.publisher) {
                
                case 'Marvel Comics':
                        history.push('/marvel');
                    break;

                case 'DC Comics':
                        history.push('/dc');
                    break;

                default:
                    history.push('/');
                    break;
            }

        } else {

            history.goBack();
        }

    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    // src={`../assets/heroes/${heroeId}.jpg`} // imagenes estaticas
                    src={heroImages(`./${heroeId}.jpg`).default}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b> Alter ego:  </b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b> Publisher:  </b> {hero.publisher}</li>
                    <li className="list-group-item"><b> First Appearance:  </b> {hero.first_appearance}</li>
                </ul>
                <br/>
                <h5> Characters </h5>
                <p>{hero.characters}</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={handleClick}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
