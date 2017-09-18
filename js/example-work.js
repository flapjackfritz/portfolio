import React from 'react';
import ExampleWorkModal from './example-work-modal';

class ExampleWork extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'modalOpen': false,
      'selectedExample': this.props.work[0]
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(evt, example) {
    this.setState({
      'modalOpen': true,
      'selectedExample': example
    });
  }

  closeModal(evt) {
    this.setState({
      'modalOpen': false
    });
  }

  render() {
    return (
      <span>
        <div className="work-examples">

          { this.props.work.map( (example, index) => {
                return (
                  <ExampleWorkBubble example={example} key={index}
                    openModal={this.openModal}/>
                )
              })
            }

        </div>

        <ExampleWorkModal example={this.state.selectedExample}
          open={this.state.modalOpen} closeModal={this.closeModal} />
      </span>
    )
  }
}

class ExampleWorkBubble extends React.Component {
  render() {
    let example = this.props.example;

    return (
      <div className="exampleBubble"
        onClick={ (evt) => this.props.openModal(evt, example) }>
        <div className="example">
          <img alt={example.image.desc}
               className="example__image"
               src={example.image.src}/>
          <dl>
            <dt className="example__title">
              {example.title}
            </dt>
            <dd></dd>
          </dl>
        </div>
      </div>
    )
  }
}
export default ExampleWork;
export { ExampleWorkBubble };
