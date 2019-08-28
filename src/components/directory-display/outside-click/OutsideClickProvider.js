import React, {Component} from 'react';
import OutsideClickContext from './OutsideClickContext';

export default class OutsideClickProvider extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleClick); // eslint-disable-line
        document.addEventListener('mousedown', this.handleClick);   // eslint-disable-line
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleClick);  // eslint-disable-line
        document.removeEventListener('mousedown', this.handleClick);    // eslint-disable-line
    }

    observers = [];

    subscribeToClickOutside = (ref, handler) => {
        this.observers = this.observers.every(observer => observer.ref !== ref)
            ? [...this.observers, {
                ref,
                handler,
            }]
            : this.observers;
    };

    unsubscribeFromClickOutside = ref => {
        this.observers = ref ? this.observers.filter(observer => observer.ref !== ref) : this.observers;
    };

    onClickOutside = (observers = []) => observers.forEach(({handler}) => handler());

    handleClick = ({target, type, key}) => {
        // handle keydown event
        if (type === 'keydown') {
            const eventKeys = ['Escape'];
            if (eventKeys.includes(key)) {
                this.onClickOutside(this.observers);
            }
            return;
        }
        // hanlde click event
        const filteredObservers = this.observers.filter(({ref}) => {
            return !(!ref.current || ref.current.contains(target));
        });
        this.onClickOutside(filteredObservers);
    };

    render() {
        const {children} = this.props;  // eslint-disable-line
        const context = {
            subscribeToClickOutside: this.subscribeToClickOutside,
            unsubscribeFromClickOutside: this.unsubscribeFromClickOutside,
        };
        return (
            <OutsideClickContext.Provider value={context}>
                {children}
            </OutsideClickContext.Provider>
        );
    }
}
