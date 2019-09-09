import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CustomSelect.scss';

class CustomSelect extends Component {
    static propTypes = {
        label: PropTypes.string,
        children: PropTypes.node,
    };

    state = {
        isActive: false,
    };

    toggleDropDown = e => { // eslint-disable-line
        this.setState({isActive: !this.state.isActive})
    };

    render() {
        const {
            label,
            children,
        } = this.props;
        const options = React.Children.toArray(children);
        const selectedOption = options[0];

        return (
            <div
                className="vub-c-custom-select"
                onClick={this.toggleDropDown}
            >
                {label && <label className="vub-c-custom-select__label">{label}</label>}
                <div className="vub-c-custom-select__field">
                    <span className="vub-c-custom-select__field-value">
                        {selectedOption && selectedOption.props && selectedOption.props.children}
                    </span>
                    <div className="vub-c-custom-select__icon" />
                </div>
                {
                    this.state.isActive &&
                    <ul className="vub-c-custom-select__drop-down" tabIndex="0">
                        {options}
                    </ul>
                }
            </div>
        );
    }
}

export default CustomSelect;

