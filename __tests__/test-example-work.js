import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

const myWork = [
  {
    'title': "Portfolio Boilerplate",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/example3.png",
      'comment': "“Bengal cat” by roberto shabs is licensed under CC BY 2.0https://www.flickr.com/photos/37287295@N00/2540855181 "
    }
  }
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork} />);

  it("Should be a 'section' element", () => {
    expect(component.type()).toEqual('section');
  });

  it("Should contain as many children as there are work examples", () =>{
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  })
});

describe("ExampleWorkBuble component", () => {
  let component = shallow(<ExampleWorkBubble example={myWork[1]} />);
  let images = component.find("img");

  it("Should contain an image element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should have the image source set correctly", () => {
    expect(images.node.props.src).toEqual(myWork[1].image.src);
  });
})
