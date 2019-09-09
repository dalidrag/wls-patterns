import React from 'react';
import PropTypes from 'prop-types';
import './Option.scss';

const Option = ({
    children,
    label,
}) => {
    return (
        <li className="vub-c-custom-select-item">
            {children || label}
        </li>
    );
};

Option.propTypes = {
    label: PropTypes.node,
    children: PropTypes.node,
};

Option.defaultProps = {
    label: null,
};

export default Option;
