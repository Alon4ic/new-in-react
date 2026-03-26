import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export default function VanDetail() {
  const location = useLocation();

  const params = useParams();
  console.log(params);
  const [van, setVan] = useState(null);
  console.log(params.id);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVan(data.vans);
      });
  }, [params.id]);

  const search = location.state?.search || "";
  //or
  //const type = location.state?.type || "all"
  const searchParams = new URLSearchParams(search);
  const currentType = searchParams.get("type");
  console.log(currentType);
  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr;{" "}
        <span>Back to {currentType !== null ? currentType : "all"} vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
