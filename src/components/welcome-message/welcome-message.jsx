import PropTypes from 'prop-types';
import della1 from './images/della_duck_01.jpg';
import della2 from './images/della_duck_02.jpg';
import style from './welcome-message.module.css';

const WelcomeMessage = ({ name, age }) => {
    // Utilisation du destructuring directement dans le parametre du composant.
    // On ne récupere que le nom et l'age défini dans les props.

    // ↓ Utilisation des fragements "<> ... </>"
    //   Permet de regroupé des balises sans mettre de "div"
    return (
        <>
            <h1>Bienvenue {name} sur l’application React!</h1>
            <picture>
                <source srcset={della2} media="(min-width: 800px)" />
                <img src={della1} alt="Image de bienvenue" className={style.logo} />
            </picture>
            <p>Vous avez {age} ans!</p>
        </>
    );
};

WelcomeMessage.defaultProps = {
    age: 18
};

// ↓ Necessite d'installer "prop-types" (npm install prop-types)
WelcomeMessage.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};


export default WelcomeMessage;
