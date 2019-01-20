import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className="Main">  
      <Router>
        <div className="NavBar">
          <Link to="/"><MenuItem content="O nas"/></Link>
          <Link to="/trips/Szwajcaria"><MenuItem content="Oferta"/></Link>
          <MenuItem content="Galeria"/>
          <MenuItem content="Informacje"/>
          <MenuItem content="Blog"/>
        </div>
      </Router>
        <div className="LitleMain">
          <div className="Logo">
            <img className="LogoContent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png" alt="lol"></img>
            
          </div>  
          <div className="SignPanel">
            <SignItem content="Zaloguj się"/>
            <SignItem content="Zarejestruj się"/>
          </div>
        </div>
      </div>
    );
  }
}

class MenuItem extends Component{
    render(){
      return(
        <div className="MenuItem">
          <h1>{this.props.content}</h1>
        </div>
      );
    }
}
class SignItem extends Component{
  render(){
    return(
      <div className="SignItem">
        <h1>{this.props.content}</h1>
      </div>  
    )
  }
}

class LastMinute extends Component {
  render(){
    return(
      <div className="LastMinute">
        <h1>{this.props.name}</h1>
        <div className="LastTrips">
          <Trip
            dataStart="01.04"
            dataEnd="15.04.2019"
            prise="6583"
            level="B"
            name={this.props.namee}
            desc1="Lorem ipsum dolor sit sed do eiusmeselit se cillum doloreod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" 
            desc2="ut aliquip ex ea commodo con dolorsequaure it. "
            desc3="Duis aute irn reprehenderit ivoluptate velitn"
            type="MTB"

          />
          <Trip
            dataStart="01.02"
            dataEnd="3.05.2019"
            prise="2023"
            level="C"
            name="Toskania"
            desc1="Lorem ipsum dolor sit sed do eiusmeselit se cillum doloreod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" 
            desc2="ut aliquip ex ea commodo con dolorsequaure it. "
            desc3="Duis aute irn reprehenderit ivoluptate velitn"
            type="MTB"
            />
          <Trip
            dataStart="01.04"
            dataEnd="14.07.2015"
            prise="5383"
            level="D"
            name="Islandia"
            desc1="Lorem ipsum dolor sit sed do eiusmeselit se cillum doloreod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" 
            desc2="ut aliquip ex ea commodo con dolorsequaure it. "
            desc3="Duis aute irn reprehenderit ivoluptate velitn"
            type="Stac"
            />
          <Trip
            dataStart="09.04"
            dataEnd="27.02.2020"
            prise="2100"
            level="A"
            name="Prowansja"
            desc1="Lorem ipsum dolor sit sed do eiusmeselit se cillum doloreod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" 
            desc2="ut aliquip ex ea commodo con dolorsequaure it. "
            desc3="Duis aute irn reprehenderit ivoluptate velitn"
            type="Trek"
          />
        </div>
      </div>


    );
  }
}
class Trip extends Component{
  render(){
    return(
      <div className="Trip">
        <div className="Info">
          <ul>
            <li>
              <i className="fas fa-calendar"></i>
              {" : "}            
              {this.props.dataStart} - {this.props.dataEnd}</li>
            <li>   
              <i className="fas fa-dollar-sign"></i>
              {" : "}   
              {this.props.prise} PLN </li>
          </ul>
          <div className="Level">
            <div className="LevelSquare">
              {this.props.level}
            </div>
          </div>
        </div>
        <div className="Desc">
          <div className="TripName">{this.props.name}</div>
          <div className="Type">{"   "}   {this.props.type}</div>
          <div className="DescText">
            <p className="DarkGrey">{this.props.desc1}</p>
            <p className="Grey">{this.props.desc2}</p>
            <p className="LightGrey">{this.props.desc3}</p>
            <p className="White">{this.props.desc4}</p>
            
          </div>
          <div className="SeeMore"><i className="fas fa-ellipsis-h"></i></div>

        </div>
      </div>
    );
  }
}

class AboutUs extends Component{
  render(){
    return(
      <div className="AboutUs">
        <h1>O nas</h1>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>
        <div className="UnFold">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
    );
  }
}

class Galery extends Component{
  render(){
    return(
      <div className="Galery">
        <h1>Galeria</h1>
        <div className="Photo">
          <div className="GaleryName"><h1>Nepal</h1></div>
          <div className="Arrows">
            <i className="far fa-arrow-alt-circle-left"></i>
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
          <div className="Dots">
            <i className="fas fa-long-arrow-alt-left"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
            <i className="fas fa-long-arrow-alt-right"></i>

          </div>
        </div>
      </div>
    );
  }
}
class Footer extends Component{
  render(){
    return(
      <div className="Footer">
        <ul>
          <li>Regulamin</li>
          <li>Kariera</li>
          <li>Polityka Prywatności</li>

        </ul>
      </div>
    );
  }
}
class Home extends Component{
  render(){
    return(
      <div className="Home">
        <LastMinute name="LastMinute"/>
        <AboutUs/>
        <LastMinute name="New Trips" namee="Jordania"/>
        <Galery/>
      </div>
    );
  }
}
class Trips extends Component{
  render(){
    return(
      <div className="Trips">
        <div className="Filtry">Filtry</div>
        <Trip
            dataStart="01.04"
            dataEnd="15.04.2019"
            prise="6583"
            level="B"
            name={this.props.match.params.namee}
            desc1="Lorem ipsum dolor sit sed do eiusmeselit se cillum doloreod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" 
            desc2="ut aliquip ex ea commodo con dolorsequaure it. "
            desc3="Duis aute irn reprehenderit ivoluptate velitn"
            type="MTB"
          />
          <Trip
            dataStart="01.02"
            dataEnd="3.05.2019"
            prise="2023"
            level="C"
            name="Toskania"
            desc1="Lorem ipsum dolor sit sed do eiusmeselit se cillum doloreod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" 
            desc2="ut aliquip ex ea commodo con dolorsequaure it. "
            desc3="Duis aute irn reprehenderit ivoluptate velitn"
            type="MTB"
            />
          <Trip
            dataStart="01.04"
            dataEnd="14.07.2015"
            prise="5383"
            level="D"
            name="Islandia"
            desc1="Lorem ipsum dolor sit sed do eiusmeselit se cillum doloreod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" 
            desc2="ut aliquip ex ea commodo con dolorsequaure it. "
            desc3="Duis aute irn reprehenderit ivoluptate velitn"
            type="Stac"
            />
          <Trip
            dataStart="09.04"
            dataEnd="27.02.2020"
            prise="2100"
            level="A"
            name="Prowansja"
            desc1="Lorem ipsum dolor sit sed do eiusmeselit se cillum doloreod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi" 
            desc2="ut aliquip ex ea commodo con dolorsequaure it. "
            desc3="Duis aute irn reprehenderit ivoluptate velitn"
            type="Trek"
          />
      </div>
    )
  }
}


class App extends Component{
  render(){
    return (
      <div className="App">
       <Main/>
        <Router>
          <div className="Router">
            <Route path="/trips/:namee" component={Trips} />
            <Route exact path="/" component={Home} />    
          </div>
        </Router>
      <Footer/>
      </div>
    );
  }
}


export default App;

