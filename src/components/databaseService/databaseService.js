import { getFirestore } from '../../database/dbconf';

const db = getFirestore();

export const getCategoriesFromDB = () => {
    let arr = [];
    db.collection('categories').get()
    .then(docs => {
        docs.forEach(doc => {
          arr.push(doc.data());
        });
    }

    ).catch(e => console.log(e));

    return arr; 
  }

export const getRandomProductsFromDB = () => {
    let arr = [];
    
    db.collection('products').where("categoryId", "==", 'Oyvbi8UDSgROPxy2uOFt').limit(4).get()
      .then(docs => {
        docs.forEach(doc => {
          arr.push({
            id: doc.id, 
            data: doc.data()
          });
        });
      }).catch(e => console.log(e));
      
      return arr;
  }