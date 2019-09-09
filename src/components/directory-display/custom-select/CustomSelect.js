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
        selectedLabel: null
    };

    toggleDropDown = e => { // eslint-disable-line
        this.setState({isActive: !this.state.isActive})
    };

    handleOnChange = label => {
        this.setState({selectedLabel: label, isActive: false});
        console.log(label); // eslint-disable-line
    };

    render() {
        const {
            label,
            children,
        } = this.props;
        const options = React.Children.map(
            children,
            (child) => React.cloneElement(child, {
                onChange: this.handleOnChange,
                selectedLabel: this.state.selectedLabel,
            })
        );
        const selectedOption = this.state.selectedLabel || options[0].props.label;

        return (
            <div
                className="vub-c-custom-select"
                onClick={this.toggleDropDown}
            >
                {label && <label className="vub-c-custom-select__label">{label}</label>}
                <div className="vub-c-custom-select__field">
                    <span className="vub-c-custom-select__field-value">
                        {selectedOption}
                    </span>
                    <div className="vub-c-custom-select__icon" />
                </div>
                {
                    this.state.isActive &&
                    <ul className="vub-c-custom-select__drop-down">
                        {options}
                    </ul>
                }
            </div>
        );
    }
}

export default CustomSelect;

