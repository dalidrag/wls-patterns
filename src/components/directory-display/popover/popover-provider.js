import React, {Component} from 'react';
import PopoverContext from './popover-context';
import Popover from './popover';

class PopoverProvider extends Component {
    state = {
        isCallerHovered: false,
        writeUp: null,
        elementNode: null,
    };

    togglePopover = (isCallerHovered, mediaItem, elementNode) => {
        this.setState({
            isCallerHovered: isCallerHovered,
            writeUp: mediaItem,
            elementNode: elementNode,
        });
    };

    render() {
        const {isCallerHovered, writeUp, elementNode} = this.state;

        return (
            <PopoverContext.Provider
                value={{
                    togglePopover: this.togglePopover,
                }}
            >
                {this.props.children /* eslint-disable-line */ }
                <Popover
                    isCallerHovered={isCallerHovered}
                    writeUp={writeUp}
                    elementNode={elementNode}
                />
            </PopoverContext.Provider>
        );
    }
}

export default PopoverProvider;
