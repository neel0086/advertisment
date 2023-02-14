import React, { useEffect, useState } from "react";
import Vendor from "../../images/vendor1.png"
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase'
import firebase from "firebase/compat/app";

import PostUi from './PostUi'

const Products = () => {
  // const p = [{ id: 'WgpuqCK2UPr0EE3Hdf7F', flag: true, "category": "xyz", "description": "Shop1", "name": "Shop1", "image": Vendor, likes: ['apaZD5EGkVUpaZ1E9YhkKdSwbm43'] }, { id: 'mg2ihpOLh2XttwvA3QYA', flag: true, "category": "xyz", "description": "Shop2", "name": "Shop2", "image": Vendor }, { id: 3, "category": "xyz", "description": "Shop3", "name": "Shop3", "image": Vendor }, { id: 4, "category": "xyz", "description": "ShopName", "name": "ShopName", "image": Vendor }, { id: 5, "category": "xyz", "description": "ShopName", "name": "ShopName", "image": Vendor }, { id: 6, "category": "xyz", "description": "ShopName", "name": "Shop5", "image": Vendor }];

  const [productsData, setProductData] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const collectionRef = db.blogs;
      const temp_blogsData = [];
      const docsSnap = await getDocs(collectionRef);
      docsSnap.forEach(doc => {
        const obj = { ...doc.data(), id: doc.id };
        temp_blogsData.push(obj);
        console.log(doc.data());
        console.log(doc.id)
      })
      setProductData(temp_blogsData)
    }
    getPosts();

    // function givePosts() {
    //   let temp = [];
    //   const unSubscribe = db.blogs.orderBy('createdAt', 'desc').onSnapshot((querySnapshot) => {
    //     console.log('invoked');
    //     temp = [];
    //     let promises = [];
    //     querySnapshot.forEach((doc) => {
    //       let data = { data: { ...doc.data() }, id: doc.id }

    //       // we can use this when we want to get user info to gether
    //       // promises.push(db.users.doc(doc.data().userId).get().then(snapshot => {
    //       //     //console.log(snapshot);
    //       //     //console.log(snapshot.data());
    //       //     let data = {
    //       //         ...doc.data(), postId: doc.id, 
    //       //         uProfileUrl: snapshot.data().profileUrl,
    //       //         uName: snapshot.data().name
    //       //     };
    //       // temp.push(data);
    //       // }));
    //       temp.push(data);
    //     });
    //     Promise.all(promises).then(() => {
    //       setProductData(temp);
    //     })
    //   });
    //   return unSubscribe;
    // }


  }, [])

  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-8 xl:gap-4 px-4">

      {productsData.map((item) => (

        <PostUi item={item} />
      ))}
    </div>
  );
};

export default Products;