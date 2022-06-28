import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("")


  
  
 

  function handleDeletedListings(deletedListing){
    const removeListings = listings.filter((listing)=>{
      return(listing.id !== deletedListing.id)
    })

    setListings(removeListings)
  }
  return (
    <div className="app">
      <Header setSearch= {setSearch} search = {search}/>
      <ListingsContainer search = {search} listings = {listings} setListings = {setListings} handleDeletedListings= {handleDeletedListings}/>
    </div>
  );
}

export default App;
