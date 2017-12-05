import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../ExampleWork';

const myWork = [
  {
    'title': 'Portfolio Boilerplate',
    'image': {
      'desc': 'example screenshot of a project involving code',
      'src': 'images/example1.png',
      'comment': ''
    }
  },
  {
    'title': 'Work Example',
    'image': {
      'desc': 'example screenshot of a project involving cats',
      'src': 'images/example3.png',
      'comment': '“Bengal cat” by roberto shabs is licensed under CC BY 2.0https://www.flickr.com/photos/37287295@N00/2540855181 '
    }
  }
];

describe('ExampleWork component', () => {
  let component = shallow(<ExampleWork myWork={myWork} />);

  it('The first child should match titles with the first provided object', () => {
    expect(component.find('ExampleWorkBubble').first().prop('example')).toEqual(myWork[0]);
  });

  it('Should be a \'span\' element', () => {
    // console.log(component.find('ExampleWorkBubble').first().prop('example'));
    expect(component.type()).toEqual('span');
  });

  it('Should contain as many children as there are work examples', () => {
    expect(component.find('ExampleWorkBubble').length).toEqual(myWork.length);
  });

  it('Should allow the modal to open and close', () => {
    component.instance().openModal();
    expect(component.instance().state.modalOpen).toBe(true);

    component.instance().closeModal();
    expect(component.instance().state.modalOpen).toBe(false);
  });
});

describe('ExampleWorkBubble component', () => {
  let mockOpenModalFn = jest.fn();

  let component = shallow(<ExampleWorkBubble example={myWork[1]}
    openModal={mockOpenModalFn}/>);
  let images = component.find('img');

  it('Should contain an image element', () => {
    expect(images.length).toEqual(1);
  });

  it('Should have the image source set correctly', () => {
    expect(images.node.props.src).toEqual(myWork[1].image.src);
  });

  it('Should call the openModal handler when clicked', () => {
    component.find('.exampleBubble').simulate('click');
    expect(mockOpenModalFn).toHaveBeenCalled();
  });
});
