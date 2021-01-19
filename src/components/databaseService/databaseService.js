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