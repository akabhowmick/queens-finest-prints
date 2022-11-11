import React from 'react';
import CodeCard from './CodeCard/CodeCard.jsx';
import InputData from './InputData.jsx';
import './StorePage.css';
// import SearchBarAndCatagories from './SearchBarAndCatagories/SearchBarAndCatagories.jsx'


const products = new InputData();
class StorePage extends React.Component{
  state = {
    data: [],
    loading: false,
    error: false,
    // filterChosen: 'all',
    // searchEntry: '',
  };

  async componentDidMount() {
    this.setState({ loading: true });
    products.productListings().then(
      (res) => {
        if (res) {
          this.setState({
            data: res.data,
            loading: false,
          });
          if(this.props.data.storeItems.length === 0){
            this.props.addProducts(res.data);
          }
        } else {
          this.setState({ loading: false });
        }
      },
      (error) => {
        this.setState({
          loading: false,
          error: true,
        });
      }
    );
  }

  // handleFilterDisplay = (filter) =>{
  //   this.setState({filterChosen: filter})
  // }

  // userSearchDisplay = (input) =>{
  //   this.setState({searchEntry: input})
  // }

  render(){
    let updateCart = this.props.updateCart;
    let userLoggedIn = this.props.userLoggedIn;
    let viewPage = this.props.viewPage;
    let itemsToBeDisplayed = this.props.data.storeItems;

    // if(this.state.filterChosen!=='all'){
    //   itemsToBeDisplayed = itemsToBeDisplayed.filter(item => item.category === this.state.filterChosen)
    // }
    // if(this.state.searchEntry!==''){
    //   let dummy = [];
    //   for(let i = 0; i<itemsToBeDisplayed.length; i++){
    //     let itemName = itemsToBeDisplayed[i].name.toLowerCase();
    //     if(itemName.indexOf(this.state.searchEntry)!==-1){
    //       dummy.push(itemsToBeDisplayed[i]);
    //     }
    //   }
    //   itemsToBeDisplayed = dummy;
    // }

    return(
      <div className='main-store-page'>
        <div className="scrolling-words-container">
          <span>You can buy: </span>
          <div className="scrolling-words-box">
            <ul>
              <li>Custom Card Stands</li>
              <li>Funko Pop Stands</li>
              <li>Custom Videogame Stands</li>
              <li>Custom Box Organizers</li>
              <li>Custom City Skylines</li>
            </ul>
          </div>
        </div>

        {/* <div>
          <SearchBarAndCatagories filterHandle={this.handleFilterDisplay} inputHandle={this.userSearchDisplay} data={this.state.data} />
        </div> */}
        {this.state.loading &&
        <div className='loading-message'>
          <svg id="svg-spinner" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="4" r="4" fill="#fff"/>
            <circle cx="12.19" cy="7.86" r="3.7" fill="#fffbf2"/>
            <circle cx="5.02" cy="17.68" r="3.4" fill="#fef7e4"/>
            <circle cx="5.02" cy="30.32" r="3.1" fill="#fef3d7"/>
            <circle cx="12.19" cy="40.14" r="2.8" fill="#feefc9"/>
            <circle cx="24" cy="44" r="2.5" fill="#feebbc"/>
            <circle cx="35.81" cy="40.14" r="2.2" fill="#fde7af"/>
            <circle cx="42.98" cy="30.32" r="1.9" fill="#fde3a1"/>
            <circle cx="42.98" cy="17.68" r="1.6" fill="#fddf94"/>
            <circle cx="35.81" cy="7.86" r="1.3" fill="#fcdb86"/>
          </svg>
          <h4>Loading...</h4>
        </div>}
        {this.state.error &&
        <div className='loading-error'>
          <h4>Could not load products; please retry later</h4>
        </div>}
        <div className='card-input-grid'>
          {itemsToBeDisplayed.map(function(cardInfo, index){
            return(
              [<div key={index} id={index}>
                <CodeCard data={cardInfo} updateCart={updateCart} userLoggedIn={userLoggedIn} viewPage={viewPage}/>
              </div>]
            )
          })
          }
        </div>
      </div>
    )
  }
}

export default StorePage;
