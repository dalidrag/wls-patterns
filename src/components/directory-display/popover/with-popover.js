import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PopoverContext from './popover-context';

export const withPopover = BaseComponent => {
    class ComposedComponent extends Component {
        static propTypes = {
            ...BaseComponent.propTypes,
        };

        static defaultProps = {
            ...BaseComponent.defaultProps,
        };

        render() {
            const popoverCallerRef = React.createRef();
            return (
            <PopoverContext.Consumer>
                {({togglePopover}) => {
                    const togglePopoverWithNode = (enter, writeUp) => {
                        if (enter) {
                            const popoverNode = popoverCallerRef.current;
                            togglePopover(enter, writeUp, popoverNode);
                        } else {
                            togglePopover(enter);
                        }
                    };

                    return (
                        <BaseComponent
                            {...this.props}
                            togglePopover={togglePopoverWithNode}
                            popoverCallerRef={popoverCallerRef}
                        >
                        </BaseComponent>
                    );
                }}
            </PopoverContext.Consumer>
            )
        }
    }

    return ComposedComponent;
};

export const withPopoverPropTypes = {
    togglePopover: PropTypes.func.isRequired,
    popoverCallerRef: PropTypes.object.isRequired,
};

export const withPopoverDefaultProps = {
    togglePopover: () => {},
    popoverCallerRef: {},
};
