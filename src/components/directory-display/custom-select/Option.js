import React from 'react';
import PropTypes from 'prop-types';
import './Option.scss';

const Option = ({
    children,
    label,
    onChange,
    selectedLabel,
}) => {
    const handleClick = () => {
        if (typeof onChange === 'function') {
            onChange(label);
        }
    };
    const isOptionSelected = selectedLabel === label;

    return (
        <li
            className={`vub-c-custom-select-item ${isOptionSelected ? 'vub-c-custom-select-item--is-active' : ''}`}
            onClick={handleClick}
        >
            {children || label}
        </li>
    );
};

Option.propTypes = {
    label: PropTypes.node,
    children: PropTypes.node,
    onChange: PropTypes.func,
    selectedLabel: PropTypes.node,
};

Option.defaultProps = {
    label: null,
};

export default Option;
