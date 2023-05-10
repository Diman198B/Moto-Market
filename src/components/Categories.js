import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                  key: 'All',
                  name: 'Все модели'
                },
                {
                    key: 'Sport',
                    name: 'Спорт'
                },
                {
                    key: 'Supersport',
                    name: 'Суперспорт'
                },
                {
                    key: 'Sport-tour',
                    name: 'Спорт-турист'
                },
                {
                    key: 'Cruzer',
                    name: 'Круизер'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories