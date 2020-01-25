import React, { Component } from 'react';

import AccordionItem from '../../components/accordion/accordionItem/AccordionItem';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  state = {
    show0: false,
    show1: false,
  }

  clickHandler (itemIndex, itemTitle) {
    if (itemIndex===0) {
      this.setState(state => {
        return {
          show0: !state.show0,
          show1: false
        }
      })
    } else {
      this.setState(state => {
        return {
          show1: !state.show1,
          show0: false
        }
      })
    }
    // Stop youtube video on close
    if (itemTitle==="Trailers") {
      Array.from(document.querySelectorAll('iframe')).forEach((e) => {
        e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      })
    }
  }

  render () {
    let accordionItems = this.props.elements.map((element, index) => {
      return (  
        <AccordionItem
          key={element.id+index}
          show={ index === 0 ? this.state.show0 : this.state.show1}
          index={index}
          clickHandler={this.clickHandler}
          title={element.title}
          body={element.body}
        />
      )
    });
  
    return (
      <div className="accordion d-flex">
        {accordionItems}
      </div>
    )
  }
}
export default Accordion;