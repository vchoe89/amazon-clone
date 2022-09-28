import {
  collection,
  doc,
  getDoc,
  getDocFromCache,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { db } from "../firebase";
import Order from "./Order";
import "./Orders.css";

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);
  //   useEffect(() => {
  //     try {
  //       if (user) {
  //         const collRef = collection(db, "users", user?.id, "orders");
  //         console.log(collRef);
  //         const orderedRef = query(collRef, orderBy("created", "desc"));
  //         const docSnap = onSnapshot(orderedRef, (snapshot) => {
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             data: doc.data(),
  //           }));
  //         });
  //         setOrders(docSnap);
  //       } else {
  //         setOrders([]);
  //       }
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   }, [user]);

  return (
    <div className="orders">
      <Order />
    </div>
  );
};

export default Orders;

//   if (user) {
//     const collRef = getDocs(
//       db,
//       "users",
//       "ZnvtmiBtrafmqHY9AegcwYU2cKV2",
//       "orders"
//     );
//     console.log(collRef);
//     const orderedRef = query(collRef, orderBy("created", "desc"));
//     console.log(orderedRef);
// const docSnap = onSnapshot(orderedRef, (snapshot) => {
//   snapshot.map((doc) => ({
//     id: doc.id,
//     data: doc.data(),
//   }));
//   setOrders(docSnap);
// });
// return docSnap;
//   } else {
//     setOrders([]);
//   }
//   getData();

//   db.collection("users")
//     .doc(user?.uid)
//     .collection("orders")
//     .orderBy("created", "desc")
//     .onSnapshot((snapshot) =>
//       setOrders(
//         snapshot.map((doc) => ({
//           id: doc.id,
//           data: doc.data(),
//         }))
//       )
//     );
//   onSnapshot(doc(db, "users", user?.uid, "orders"), (snapshot) => {
//     snapshot.orderBy("created", "desc");
//     setOrders(
//       snapshot.map((doc) => ({
//         id: doc.id,
//         data: doc.data(),
//       }))
//     );
//   });

//   const userOrders = onSnapshot(
//     doc(db, "users", user?.id, "orders", orders?.uid).orderBy(
//       "created",
//       "desc"
//     )
//   );
// setOrders(
//   userOrders.map((doc) => ({
//     id: doc.id,
//     data: doc.data(),
//   }))
// );
//   console.log(orders);
//   const collRef = collection(db, "users", user?.id, "orders");
//   const q = query(collRef, orderBy("created", "desc"));

{
  /* <h1>Your Orders</h1>
<div className="orders__order">
  {orders?.map((order) => {
    <Order order={order} />;
  })}
</div> */
}
