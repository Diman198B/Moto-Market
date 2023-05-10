import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" +this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} alt='изображение мотоцикла'/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <strong>${this.props.item.price}</strong>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    )
  }
}

export default Item