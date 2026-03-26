import React from "react";


function Product({ product, style, chooseProduct }) {
  return (
    <div className="product-card" style={style} onClick={() => chooseProduct(product.id)}>
      <p className="truncate">{product.name}</p>
    </div>
  );
}

export default React.memo(Product);


//VERSION10
// import React from "react";
// import { sleep } from "./utils";

// function Product({ product, style }) {
//   sleep(1);
//   console.log("Product Rendered");
//   return (
//     <div className="product-card" style={style}>
//       <p className="truncate">{product.name}</p>
//     </div>
//   );
// }
// export default React.memo(Product);

//VERSION8
// import React from "react";
// import { sleep } from "./utils";
// function Product({ product, darkMode }) {
//   sleep(1);
//   const styles = {
//     backgroundColor: darkMode ? "#2b283a" : "whitesmoke",
//     color: darkMode ? "white" : "#2b283a",
//   };
//   return (
//     <div className="product-card" style={styles}>
//       <p className="truncate">{product.name}</p>
//     </div>
//   );
// }

// export default React.memo(Product)

// TO VERSION6
// import React from "react";

// export default function Product({ product }) {
//   return (
//     <div className="product-card">
//       <p className="truncate">{product.name}</p>
//     </div>
//   );
// }
