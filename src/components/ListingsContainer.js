import React, { useEffect} from "react";
import ListingCard from "./ListingCard";



function ListingsContainer({listings, setListings, handleDeletedListings, search }) {

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(data => data.json())
    .then(data=> setListings(data))
  }, [])

const searchableListings = listings.filter((listing)=> {
  if(search === "") return true;

  return listing.description.includes(search)
})


  return (
    <main>
      <ul className="cards">
        {searchableListings.map((listing) =>{
    return (<ListingCard key ={listing.id} listing = {listing}  handleDeletedListings = {handleDeletedListings} />)
  })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
