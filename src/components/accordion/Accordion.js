import React, { Component } from 'react';

import classes from './Accordion.module.scss';
import AccordionItem from './accordionItem/AccordionItem';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  state = {
    show0: false,
    show1: false,
  }

  clickHandler (eleTitle) {
    if (eleTitle===0) {
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
      <div className={`${ classes.accordion } accordion d-flex`}>
        {accordionItems}
      </div>
    )
  }
}
export default Accordion;