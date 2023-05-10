import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
           id:1,
           title:'Yamaha R1',
           img: '1.yamaha R1.jpg',
           desc:'Флагман компании Yamaha Motor Company. Довольно популярен во всем мире.',
           category:'Sport',
           price:'5500'
        },
        {
          id:2,
          title:'Suzuki Hayabusa',
          img: '2.suzuki hayabusa.jpg',
          desc:'Производится японской компанией Suzuki с 1999 года. Имеет уникальный аэродинамический дизайн.',
          category:'Sport-tour',
          price:'8000'
        },
        {
          id:3,
          title:'Kawasaki Hinja H2R',
          img: '3.kawasaki ninja h2r.jpg',
          desc:'Самый быстрый и мощный серийный мотоцикл на рынке. Максимальная скорость более 400 км/ч.',
          category:'Supersport',
          price:'23000'
        },
        {
          id:4,
          title:'Kawasaki Ninja 400',
          img: '4.kawasaki ninja400.jpg',
          desc:'Недорогой и не очень сложный, но со значительным спортивным потенциалом.',
          category:'Sport',
          price:'7800'
        },
        {
          id:5,
          title:'Kawasaki ZZR 1400',
          img: '5.kawasaki ZZR1400.jpg',
          desc:'Воплощение чудовищной мощности и самых современных технологий концерна.',
          category:'Sport-tour',
          price:'11500'
        },
        {
          id:6,
          title:'BMW s1000rr',
          img: '6.bmw s1000rr.jpg',
          desc:'Спортивный мотоцикл серийного производства немецкой компании BMW Motorrad.',
          category:'Supersport',
          price:'9200'
        },
        {
          id:7,
          title:'Honda CBR 600',
          img: '7.honda-cbr-600.jpg',
          desc:'Выпускался компанией Honda с 1987 года по 1990. Известен на рынке США как "Hurricane".',
          category:'Sport',
          price:'8750'
        },
        {
          id:8,
          title:'Suzuki Bandit 400',
          img: '8.suzuki bandit.jpg',
          desc:'Модель городского типа, изначально была доступна только на внутреннем японском рынке.',
          category:'Cruzer',
          price:'6900'
        },
        {
          id:9,
          title:'Honda Blackbird',
          img: '9.honda blackbird.jpg',
          desc:'До 1999 года считался самым быстрым мотоциклом в мире, до появления Hayabusa.',
          category:'Sport-tour',
          price:'10500'
        },
        {
          id:10,
          title:'Honda cbr1000rr',
          img: '10.honda cbr1000rr.jpg',
          desc:'Мoщный и динaмичный cпoртбaйк co вceми cвoйcтвeнными для данного класса.',
          category:'Supersport',
          price:'13650'
        },
        {
          id:11,
          title:'Triumph Rocket 3',
          img: '11.triumph rocket 3.jpg',
          desc:'Трёхцилиндровый мотоцикл, выпускаемый британской компанией Triumph Motorcycles Ltd.',
          category:'Cruzer',
          price:'7000'
        },
        {
          id:12,
          title:'Yamaha VMAX',
          img: '12.Yamaha VMAX.jpg',
          desc:'Выпускается с 1985 года; известен благодаря своему мощному двигателю V4 и оригинальному дизайну.',
          category:'Cruzer',
          price:'15100' 
        }
      ],
      ShowFullItem: false,
      fullItem: {}
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render () {
      return (
        <div className="wrapper"> 
          <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
          <Categories chooseCategory={this.chooseCategory}/>
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
          {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
          <Footer />
        </div>
      );
   }

onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({ShowFullItem: !this.state.ShowFullItem})
}


chooseCategory(category) {
    if(category === 'All') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)})
 }

 deleteOrder(id) {
    this.setState ({orders: this.state.orders.filter(el => el.id !== id)})
 }

  addToOrder(item) {
    let isInArray = false
      this.state.orders.forEach(el => {
        if(el.id === item.id)
          isInArray = true
      })
      if(!isInArray)
        this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
