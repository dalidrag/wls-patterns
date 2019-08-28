import React, {PureComponent} from 'react';
import OverlayContext from './OverlayContext';

export const withOverlay = BaseComponent => (
    class ComposeComponent extends PureComponent {
        render() {
            return (
                <OverlayContext.Consumer>
                    {context => {
                        const props = {
                            ...this.props,
                            ...context,
                        };
                        return <BaseComponent {...props} />;
                    }}
                </OverlayContext.Consumer>
            );
        }
    }
);
