// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import TestimonialItems from "./TestimonialItems";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="ParentBox">
      <PhotoProduk />
      <ProdukInfo isDiscount="yes" Category="RUNNING" Name="Sepatu Sneakers" />
      <TestimonialItems />
    </div>
  );
}

function PhotoProduk() {
  return (
    <div className="Photo">
      <img src="assets/sepatu.jpg" alt="sepatu"></img>
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount, discount } = props;
  if (isDiscount === "yes") {
    return <p>Diskon {discount}% Off</p>;
  } else if (isDiscount === "coming") {
    return <p>Akan Ada Diskon</p>;
  } else {
    return <p>Belum Ada Diskon</p>;
  }
}

function ProdukInfo(props) {
  const { Category, Name, isDiscount } = props;
  const benefits = [
    "bahan di press sablon",
    "Bahan lebih halus",
    "Warna hitam merah dan hitam putih",
    "Ukuran 39 40 41 42 43",
  ];
  const listBenefits = benefits.map((itemBenefit) => <li>{itemBenefit}</li>);
  return (
    <div>
      <div className="Description">
        <p className="Cate">{Category}</p>
        <h1 className="Title">{Name}</h1>
        <p className="Price">IDR 200.000</p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
        <p className="Info">
          {"Sepatu Sneakers Pria Casual Sporty API Sepatu Pria Cowok Murah"}
          <br></br>
          <ul>{listBenefits}</ul>
          packing tidak pakai dus
          <br></br>
          <br></br> SILAHKAN DI ORDER JANGAN LUPA FOLLOW TOKO KAMI UNTUK
          MENDAPATKAN VOUCHER POTONGAN HARGA DENGAN MINIMUM PEMBELIAN 10.000
          HAPPY SHOPPING
        </p>

        <a onClick={(e) => AddCart(Name, e)} href="/#">
          Add To Cart
        </a>
      </div>
    </div>
  );
}

function AddCart(e) {
  return console.log("Membeli " + e);
}

CheckDiscount.propTypes = {
  name: PropTypes.isRequired,
};

export default App;
