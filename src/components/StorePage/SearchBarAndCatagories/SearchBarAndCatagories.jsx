import React from 'react';
import './SearchBarAndCatagories.css'

class SearchBarAndCatagories extends React.Component{
  constructor(){
    super();
    this.state = {
      filterChosen: 'all',
      categoryArray: ['all'],
      search: ''
    }
  }

  inputHandle = (e) => {
    e.preventDefault();
    this.setState({search: e.target.value})
    this.props.inputHandle(e.target.value)
  }

  updateFilter = (e) => {
    e.preventDefault();
    this.setState({filterChosen: e.target.value})
    this.props.filterHandle(e.target.value)
  }

  render(){
    for(let i = 0; i<this.props.data.length; i++){
      let category = this.props.data[i].category;
      let categoryIndex = this.state.categoryArray.indexOf(category);
      if(categoryIndex === -1){
        this.state.categoryArray.push(category)
      }
    }
    let btnArray = this.state.categoryArray;
    let activeTag = 'activeTag';
    return(
      <div className='bar-filters'>
        <div className='search-bar'>
          <input placeholder="Search Products" onChange={(e)=>this.inputHandle(e)}/>
        </div>
        <div className='categories'>
          {btnArray.map((category, index) => (
            <button
              key={index}
              id={category}
              value={category}
              onClick={this.updateFilter}
              className={`round-pill btn-primary filterTag ${this.state.filterChosen === category ? activeTag : null}`}>
              {category}</button>
          ))}
        </div>


      </div>
    )
  }
}

export default SearchBarAndCatagories;

// ${style.catButton} ${
//   this.state.filterChosen === category
//     ? style.activeColor
//     : null
// }
