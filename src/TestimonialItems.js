import React from "react";
import "./App.js";

function TestimonialItems() {
  // mempersiapkan data dummy JSON
  const users = [
    {
      id: 1,
      name: "Donal Yondaime",
      photo:
        "https://images.pexels.com/photos/11059507/pexels-photo-11059507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Mantab produknya murah meriah",
    },
    {
      id: 2,
      name: "Salamander",
      photo:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Mantab produknya murah meriah",
    },
    {
      id: 3,
      name: "Yosha",
      photo:
        "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Mantab produknya murah meriah",
    },
  ];
  const listReview = users.map((itemReview) => (
    <div key={itemReview.id} className="Item">
      <img src={itemReview.photo} alt="testi-foto"></img>
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.description}</p>
      </div>
    </div>
  ));
  return (
    <div className="Testimonial-Box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

export default TestimonialItems;
