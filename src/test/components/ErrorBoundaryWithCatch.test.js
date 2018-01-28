import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import {mount, shallow} from 'enzyme';
import ErrorBoundary from '../../app/components/ErrorBoundaryWithCatch';

const GoodChild = () => <div className="child">I am a good child</div>;

const BadChild = () => {
  throw new Error('Error thrown from problem child');
  return <div className="child">I am a good child</div>;
};

describe('ErrorBoundary', () => {
  it('should render the child if there is no error', () => {
    const props = {
      isLoading: false,
      isRejected: false,
      children: <GoodChild />
    };
    const component = mount(<ErrorBoundary {...props} />);

    expect(component.find('.child').length).toEqual(1);
    expect(component.find('.child').text()).toEqual('I am a good child');
  });

  it('should show the error if the child throws an error', () => {
    const props = {
      isLoading: false,
      isRejected: false,
      children: <BadChild />
    };
    const component = mount(<ErrorBoundary {...props} />);

    expect(component.find('.child').length).toEqual(0);
    expect(component.state().hasErrors).toBeTruthy();
    expect(component.find('.error').length).toBeTruthy();
  });
});