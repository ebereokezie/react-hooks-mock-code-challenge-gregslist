import React, {useState} from "react";

function ListingCard({listing, handleDeletedListings}) {
  
  const[favorite, setFavorite] = useState(false)

function handleClick(){
  setFavorite(!favorite)
}

function handleDeleteClick(){
  fetch(`http://localhost:6001/listings/${listing.id}`,{
  method: "DELETE",
})
.then((data) => data.json())
.then(() => handleDeletedListings(listing))
}
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick = {handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick = {handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick = {handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
