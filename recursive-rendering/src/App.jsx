import React from "react";
import ReactDOM from "react-dom/client";
import Product from "./Product";
import productsData from "./data";

export default function App() {
  const [count, setCount] = React.useState(0);
  const [darkMode, setDarkMode] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  const chooseProduct = React.useCallback((id) => {
    setSelectedProduct(id);
  }, [setSelectedProduct])
  const productStyles = React.useMemo(() => {
    return {
      backgroundColor: darkMode ? "#2b283a" : "whitesmoke",
      color: darkMode ? "white" : "#2b283a",
    };
  }, [darkMode]);

  const selectedStyles = {
    backgroundColor: "#93c47d",
  };

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>
        -
      </button>
      <button className="button" onClick={increment}>
        +
      </button>
      <br />
      <br />
      <button className="button" onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? "Light" : "Dark"}
      </button>
      <br />
      <br />
      <div className="products-list">
        {productsData.map((product) => {
          const isSelected = product.id === selectedProduct;
          return (
            <Product
              key={product.id}
              product={product}
              style={
                isSelected
                  ? { ...productStyles, ...selectedStyles }
                  : productStyles
              }
              chooseProduct={chooseProduct}
            />
          );
        })}
      </div>
    </>
  );
}

//VERSION10 useCallback() Theory
// import React from "react";
// import GrandParent from "./GrandParent";

// export default function App() {
//   const [count, setCount] = React.useState(0);
//   const [darkMode, setDarkMode] = React.useState(false);

//   const increment = React.useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, [])

//   function decrement() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   const style = React.useMemo(() => {
//     return {
//       backgroundColor: darkMode ? "#2b283a" : "#e9e3ff",
//       color: darkMode ? "#e9e3ff" : "#2b283a",
//     };
//   }, [darkMode]);

//   console.log("[GP] [P] [C] [GC] APP just rendered");
//   return (
//     <div className="container">
//       <button onClick={decrement}>-</button>
//       <button onClick={increment}>+</button>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setDarkMode((prev) => !prev)}>
//         {darkMode ? "Switch to Light" : "Switch to Dark"}
//       </button>
//       <p>App component</p>
//       <GrandParent style={style} increment={increment} />
//       <GrandParent />
//     </div>
//   );
// }

//VERSION9
// import React from "react";
// import ReactDOM from "react-dom/client";
// import Product from "./Product";
// import productsData from "./data";

// export default function App() {
//   const [count, setCount] = React.useState(0);
//   const [darkMode, setDarkMode] = React.useState(false);

//   function increment() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   function decrement() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   /**
//    * Challenge: we've measured a performance issue with our Product
//    * components, and we realized we don't need to rerender them every
//    * time the count changes! We need your help to fix this issue!
//    */

//   const productStyles = React.useMemo(() => {
//     return {backgroundColor: darkMode ? "#2b283a" : "whitesmoke",
//     color: darkMode ? "white" : "#2b283a"}
//   }, [darkMode]);

//   return (
//     <>
//       <h1>The current count is {count}</h1>
//       <button className="button" onClick={decrement}>
//         -
//       </button>
//       <button className="button" onClick={increment}>
//         +
//       </button>
//       <br />
//       <br />
//       <button className="button" onClick={() => setDarkMode((prev) => !prev)}>
//         {darkMode ? "Light" : "Dark"}
//       </button>
//       <br />
//       <br />
//       <div className="products-list">
//         {productsData.map((product) => (
//           <Product key={product.id} product={product} style={productStyles} />
//         ))}
//       </div>
//     </>
//   );
// }

//VERSION8
// import React from "react";
// import GrandParent from "./GrandParent";
// import Count from "./Count"

// export default function App() {
//   // const [count, setCount] = React.useState(0);
//   const [darkMode, setDarkMode] = React.useState(false);

//   // function increment() {
//   //   setCount((prevCount) => prevCount + 1);
//   // }

//   // function decrement() {
//   //   setCount((prevCount) => prevCount - 1);
//   // }

//   const style = React.useMemo(() => {
//     const resultStyle = {backgroundColor: darkMode ? "#2b283a" : "#e9e3ff",
//     color: darkMode ? "#e9e3ff" : "#2b283a"}
//     return resultStyle
//   }, [darkMode]);

//   React.useEffect(() => {
//     console.log("style changed");
//   }, [style]);

//   console.log("[GP] [P] [C] [GC] APP just rendered");
//   return (
//     <div className="container">
//       <Count />
//       <button onClick={() => setDarkMode((prev) => !prev)}>
//         {darkMode ? "Switch to Light" : "Switch to Dark"}
//       </button>
//       <p>App component</p>
//       <GrandParent style={style} />
//       <GrandParent />
//     </div>
//   );
// }

//VERSION7 React.memo() Practice
// import React from "react";
// import ReactDOM from "react-dom/client";
// import Product from "./Product";
// import productsData from "./data";

// /**
//  * Challenge: Using what you've learned about React.memo(),
//  * improve the performance of this app when the counter
//  * is changed. Since the products don't care about the `count`
//  * value at all, they shouldn't need to rerender when `count`
//  * changes.
//  */

// export default function App() {
//   const [count, setCount] = React.useState(0);
//   const [darkMode, setDarkMode] = React.useState(false);

//   function increment() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   function decrement() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   return (
//     <>
//       <h1>The current count is {count}</h1>
//       <button className="button" onClick={decrement}>
//         -
//       </button>
//       <button className="button" onClick={increment}>
//         +
//       </button>
//       <br />
//       <br />
//       <button className="button" onClick={() => setDarkMode((prev) => !prev)}>
//         {darkMode ? "Light" : "Dark"}
//       </button>
//       <br />
//       <br />
//       <div className="products-list">
//         {productsData.map((product) => (
//           <Product key={product.id} product={product} darkMode={darkMode} />
//         ))}
//       </div>
//     </>
//   );
// }
// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import Product from "./Product";
// // import productsData from "./data";
// // import Count from "./Count";

// // /**
// //  * Challenge: Using what you've learned about React.memo(),
// //  * improve the performance of this app when the counter
// //  * is changed. Since the products don't care about the `count`
// //  * value at all, they shouldn't need to rerender when `count`
// //  * changes.
// //  */

// // export default function App() {
// //   // const [count, setCount] = React.useState(0);
// //   const [darkMode, setDarkMode] = React.useState(false);

// //   // function increment() {
// //   //   setCount((prevCount) => prevCount + 1);
// //   // }

// //   // function decrement() {
// //   //   setCount((prevCount) => prevCount - 1);
// //   // }

// //   return (
// //     <>
// //       <Count />
// //       {/* <h1>The current count is {count}</h1>
// //       <button className="button" onClick={decrement}>
// //         -
// //       </button>
// //       <button className="button" onClick={increment}>
// //         +
// //       </button>
// //       <br /> */}
// //       <br />
// //       <button className="button" onClick={() => setDarkMode((prev) => !prev)}>
// //         {darkMode ? "Light" : "Dark"}
// //       </button>
// //       <br />
// //       <br />
// //       <div className="products-list">
// //         {productsData.map((product) => (
// //           <Product key={product.id} product={product} darkMode={darkMode} />
// //         ))}
// //       </div>
// //     </>
// //   );
// // }

// VERSION6 React.memo() Theory
// import React from "react";
// import GrandParent from "./GrandParent";

// export default function App() {
//   const [count, setCount] = React.useState(0);

//   function increment() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   function decrement() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   console.log("[GP] [P] [C] [GC] APP just rendered");
//   return (
//     <div>
//       <button onClick={decrement}>-</button>
//       <button onClick={increment}>+</button>
//       <h2>Count: {count}</h2>
//       <p>App component</p>
//       <GrandParent count={count} />
//       <GrandParent />
//     </div>
//   );
// }

//VERSION5 useMemo() Practice
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Product from "./Product"
// import productsData from "./data"

// export default function App() {
//   const [count, setCount] = React.useState(0);
//   const [sort, setSort] = React.useState(false);

//   function increment() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   function decrement() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   /**
//    * NOTE: I recommend opening the dev tools performance tab and throttling
//    * to a 6x slowdown to help highlight the delays that are happening with
//    * the expensive "sort" method call on each render.
//    */
//   // const startTime1 = Date.now();
//   // const sortedProducts = [...productsData].sort((a, b) =>
//   //   a.name.localeCompare(b.name),
//   // );
//   // const endTime1 = Date.now();
//   // console.log(`Took ${endTime1 - startTime1}ms`);

//   /**
//    * Challenge: memoize the sorting calculation of sortedProducts
//    * so that it only happens if the value of "sort" changes.
//    *
//    * Make sure to comment out the version
//    * above when testing your version here
//    */
//   const productCount = React.useMemo(() => {
//     const startTime2 = Date.now();
//     const result = [...productsData].sort((a, b) => a.name.localeCompare(b.name));
//     const endTime2 = Date.now();
//     console.log(`Took ${endTime2 - startTime2}ms`);
//     return result
//   }, [sort]);

//   const visibleProducts = sort ? productCount : productsData;

//   return (
//     <>
//       <h1>The current count is {count}</h1>
//       <button className="button" onClick={decrement}>
//         -
//       </button>
//       <button className="button" onClick={increment}>
//         +
//       </button>
//       <br />
//       <br />
//       <button className="button" onClick={() => setSort((prev) => !prev)}>
//         {sort ? "Unsort" : "Sort"}
//       </button>
//       <br />
//       <br />
//       <div className="products-list">
//         {visibleProducts.map((product) => (
//           <Product key={product.id} product={product} />
//         ))}
//       </div>
//     </>
//   );
// }

//VERSION4 useMemo Theory
// import React from "react";
// import ReactDOM from "react-dom/client";
// import Product from "./Product";
// import productsData from "./data";
// import { slowCountItems } from "./utils";

// export default function App() {
//   const [count, setCount] = React.useState(0);

//   function increment() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   function decrement() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   // React.useEffect(() => {
//   //   console.log("productsData changed")
//   // }, [productsData])

//   const productsCount = React.useMemo(() => {
//     return slowCountItems(productsData, 500);
//   }, [productsData])

//   return (
//     <>
//       <h1>The current count is {count}</h1>
//       <button className="button" onClick={decrement}>
//         -
//       </button>
//       <button className="button" onClick={increment}>
//         +
//       </button>
//       <br />
//       <br />
//       <h2>There are {productsCount} products</h2>
//       <div className="products-list">
//         {productsData.map((product) => (
//           <Product key={product.id} product={product} />
//         ))}
//       </div>
//     </>
//   );
// }

// VERSION3 React.Suspense
// import React from "react";
// import ReactDOM from "react-dom/client";
// // import ProductsList from "./ProductsList";

// const ProductsList = React.lazy(() => {
//   return import("./ProductsList.jsx")
// })

// export default function App() {
//   const [count, setCount] = React.useState(0);
//   const [showProducts, setShowProducts] = React.useState(false);

//   function increment() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   function decrement() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   return (
//     <>
//       <h1>The current count is {count}</h1>
//       <button className="button" onClick={decrement}>
//         -
//       </button>
//       <button className="button" onClick={increment}>
//         +
//       </button>
//       <br />
//       <br />
//       <button
//         className="button"
//         onClick={() => setShowProducts((prev) => !prev)}
//       >
//         Show Products
//       </button>
//       <br />
//       <br />
//       <React.Suspense fallback={<h2>Loading...</h2>}>
//         <div className="products-list">{showProducts && <ProductsList />}</div>
//       </React.Suspense>
//     </>
//   );
// }

//VERSION2
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { faker } from "@faker-js/faker";

// import Product from "./Product";
// import productsData from "./data";
// import Timer from "./Timer";

// export default function App() {
//   const [showTimer, setShowTimer] = React.useState(false);

//   function toggleTimer() {
//     setShowTimer((prev) => !prev);
//   }

//   return (
//     <div>
//       <button className="button" onClick={toggleTimer}>
//         {showTimer ? "Hide" : "Show"} Timer
//       </button>
//       {showTimer && <Timer />}
//     </div>
//   );
//   // const [count, setCount] = React.useState(0);

//   // function increment() {
//   //   setCount((prevCount) => prevCount + 1);
//   // }

//   // function decrement() {
//   //   setCount((prevCount) => prevCount - 1);
//   // }

//   // const productsCopy = [...productsData]
//   // productsCopy.push({
//   //   id: faker.database.mongodbObjectId(),
//   //   name: "+ Create new item",
//   // });

//   // return (
//   //   <>
//   //     <h1>The current count is {count}</h1>
//   //     <button className="button" onClick={decrement}>
//   //       -
//   //     </button>
//   //     <button className="button" onClick={increment}>
//   //       +
//   //     </button>
//   //     <br />
//   //     <br />
//   //     <div className="products-list">
//   //       {productsCopy.map((product) => (
//   //         <Product key={product.id} product={product} />
//   //       ))}
//   //     </div>
//   //   </>
//   // );
// }

//VERSION1
// import React from "react";
// import GrandParent from "./GrandParent";

// export default function App() {
//   const [count, setCount] = React.useState(0);

//   function increment() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   function decrement() {
//     setCount((prevCount) => prevCount - 1);
//   }

//   console.log("[GP] [P] [C] [GC] APP just rendered");
//   return (
//     <div>
//       <button onClick={decrement}>-1</button>
//       <button onClick={increment}>+1</button>
//       <h2>{count}</h2>
//       <p>App component</p>
//       <GrandParent count={count} />
//       <GrandParent />
//     </div>
//   );
// }
