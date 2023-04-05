import React from 'react'
import { data } from '../../data/WriterData'
import './Home.scss'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className='home'>

      <div className="container">
        <nav className='navbar'>
          <h1 className='navbar__text'>
            Badiiyat
          </h1>
          <ul className='nav__list'>
            <li>Bosh sahifa</li>
            <li>Nasr</li>
            <li>Nazm</li>
            <li>Maqolalar</li>
            <li>  Forum</li>
          </ul>
        </nav>
        <div className="hero">
      
          <center>
            <div className="search">
              <center>
                <h1 className='search__text'>Qidirish</h1>
<input type="text"className='search__int' placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
<button className='search__btn'>Izlash</button>
              </center>
            </div>
          </center>
        </div>
      </div>
    {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! this is end of header  */}
 
 <div className="data">
  <h1 className='data__text'>Asosiy kategoriyalar</h1>
<center>
<ul className='data__list'>
{
  

    data && data.map((item,index)=>(
      <li className='list__item'>
     <Link to={`/writer${item.id}`}>
     <img className='item__img' src={item.img} alt="" /><br />
        <h5 className='item__name'>{item.name}</h5>
        <p className='item__item'>{item.year}</p>
        <p className='item__item2'>{item.books}</p></Link>
      </li>
    ))
}
  </ul>
</center>
 </div>

    </div>

  )
}

export default Home