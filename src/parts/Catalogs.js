import React, { useState, useEffect } from "react";

export default function Catalogs() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [items, setItems] = useState([]);

  function numberFormat(price) {
    const currency = Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return currency.format(price);
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    return (async function () {
      const response = await fetch(
        "https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc",
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            "x-api-key": process.env.REACT_APP_APIKEY,
          },
        }
      );
      const { nodes } = await response.json();
      setItems(nodes);

      const script = document.createElement("script");
      script.src = "/carousel.js";
      script.async = false;
      document.body.appendChild(script);
    })();
  }, []);

  return (
    <>
      <div className="catalog-wrapper">
        <div className="container">
          <h2>Jenis Katalog</h2>
          {items &&
            items.map(function (item) {
              return (
                <div className="items" key={item.id}>
                  <div className="item">
                    <img src={item.image1} alt={item.name} />
                    <h3>{item.name}</h3>
                    <span>{numberFormat(item.price)}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="clear"></div>
    </>
  );
}
