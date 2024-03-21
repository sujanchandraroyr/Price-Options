import PropTypes from 'prop-types'
import { HiCheck } from "react-icons/hi2";

const Feature = ({feature}) => {
    console.log(feature)
    return (
        <div className='ml-3'>
            <h3 className='flex items-center gap-2'><HiCheck className='text-lg font-semibold bg-green-600 rounded-full p-1' />{feature}</h3>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.array
}
export default Feature;