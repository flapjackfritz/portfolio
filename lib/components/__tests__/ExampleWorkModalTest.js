import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../ExampleWorkModal';

const myExample =  {
  'title': 'Portfolio Boilerplate',
  'href': 'http://example.com',
  'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'image': {
    'desc': 'example screenshot of a project involving code',
    'src': 'images/example1.png',
    'comment': ''
  }
};

describe('ExampleWorkModal component', () => {
  let component = shallow(<ExampleWorkModal example={ myExample }
    open={false}/>);
  let openComponent = shallow(<ExampleWorkModal example={ myExample }
    open={true}/>);

  let anchors = component.find('a');

  it('Should contain a single anchor element', () => {
    expect(anchors.length).toEqual(1);
  });

  it('Should link to our project', () => {
    expect(anchors.node.props.href).toEqual(myExample.href);
  });

  it('Should have the modal class set correctly', () => {
    expect(component.find('.background--blue').hasClass('d-none')).toBe(true);
    expect(openComponent.find('.background--blue').hasClass('modal--open')).toBe(true);
  });
});
