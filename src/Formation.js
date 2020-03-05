import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      cards:[],
      myList:[]
    
    }
  }
  componentDidMount(){
    const api= "https://api.pokemontcg.io/v1/cards";
    fetch(api)
    .then( data=> data.json())
    .then(cards=> {console.log(cards);
    this.setState({cards:cards.cards})}
    )
    .catch(err=> console.log(err))
    }

  render(){
    const {cards}=this.state;
    return(
      <div className="cards">
        {cards.map((card,index)=> {
          return (
            <Pokemoncard  isInList={this.ifExists(card)} AddtoMylist={this.AddtoMylist} RemoveFromMylist={this.RemoveFromMylist} card={card} key={index} />
          )
        })}
          
      </div>
    )
  }

  AddtoMylist=(card)=>{
      this.setState({
        myList:[...this.state.myList,card]}
        , ()=> 
          console.log(this.state.myList))
        
      }
  
  RemoveFromMylist=(card)=>{
    let cloneList=[...this.state.myList];
    const newList=cloneList.filter(_card => _card.id !==card.id)
    this.setState({
      myList:newList},
      ()=> console.log(this.state.myList))
  }
  ifExists=(card)=>{
    const index=this.state.myList.findIndex(_card => _card.id === card.id);
    
    return index>-1 ;
  }
}
export default App;

const Pokemoncard =(props)=> {
  return (
    <div className={`pokemon-card ${props.isInList ? "in": ""} `}>
      <h3>{props.card.name} </h3>
      <div className="pokemon-img">
        <img src={props.card.imageUrl} />
      </div>
      <div className="buttons">
        {
          props.isInList ?         <button  onClick={()=>props.RemoveFromMylist(props.card)}>remove</button>

        :
        <button onClick={()=>props.AddtoMylist(props.card)}>add </button> }
      </div>
    </div>
  )
}