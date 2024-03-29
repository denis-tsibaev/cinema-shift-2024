import PropTypes from 'prop-types';
import './Container.scss';

export const Container = ({ children }) => {
    return <div className="Container">{children}</div>;
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
};
