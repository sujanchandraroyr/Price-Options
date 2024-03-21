import {PropTypes} from 'prop-types';
import Feature from '../feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-lime-400 p-5 rounded-lg flex flex-col '>
            <h2 className='text-4xl font-bold text-center'>{price}</h2>
            <h1 className='text-2xl font-semibold text-center my-4'>{name}</h1>
            <div className='flex-grow'>
            {
              features.map(feature => <Feature key = {feature.id} feature = {feature}></Feature>)  
            }
            </div>
            <button className='bg-orange-400 p-2 rounded-md w-full'>Buy Now</button>
        </div>
        
    );
};

PriceOption.propTypes = {
    option: PropTypes.array
}
export default PriceOption;