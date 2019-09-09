import React from 'react';
import {mount} from 'enzyme';
import Option from './Option';

let wrapper;

const onChangeMock = jest.fn();

beforeEach(() => {
    wrapper = mount(
        <Option
            onChange={onChangeMock}
            value="Some value"
            parentValue={null}
            selectedValue="Some value"
            className="vub-c-custom-select-item--test-class"
        >
            Some value
        </Option>
    );
});

afterEach(() => {
    jest.restoreAllMocks();
    wrapper.unmount();
});

it('should on click call prop "onChange" with prop "value" as first argument', () => {
    wrapper.simulate('click');
    expect(onChangeMock).toHaveBeenCalledWith('Some value', null);
});

describe('the classes', () => {
    it('has class --is-disabled when it has prop "isDisabled"', () => {
        wrapper = mount(
            <Option isDisabled={true}>Some value</Option>
        );
        expect(wrapper.exists('.vub-c-custom-select-item--is-disabled')).toEqual(wrapper.prop('isDisabled'));
    });

    it('has class --is-active when option is selected', () => {
        expect(wrapper.exists('.vub-c-custom-select-item--is-active')).toEqual(wrapper.prop('selectedValue') === wrapper.prop('value'));
    });

    it('has class defined with "className" prop', () => {
        const className = wrapper.prop('className') ? `.${wrapper.prop('className')}` : null;
        if (className) {
            expect(wrapper.exists(className)).toEqual(true);
        }
    });
});
