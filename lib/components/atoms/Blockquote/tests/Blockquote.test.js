import React from 'react';
import { shallow } from 'enzyme';

import Blockquote from '../Blockquote';

describe('<Blockquote />', () => {
  let BlockquoteComponent = '';
  beforeEach(() => {
    BlockquoteComponent = shallow(<Blockquote />);
  });
  it('should render blockquote', () => {
    expect(BlockquoteComponent.find('blockquote')).toBeTruthy();
  });
  it('should render content', () => {
    expect(BlockquoteComponent.find('p')).toBeTruthy();
  });
  it('should render author name', () => {
    expect(BlockquoteComponent.find('footer')).toBeTruthy();
  });

  test('should render correctly', () => {
    expect(BlockquoteComponent).toMatchSnapshot();
  });
});