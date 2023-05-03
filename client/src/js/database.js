import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  console.log('putDb working')
  //define the db
  const db = await openDB("jate", 1);
  //create the transaction + specify the database and permissions
  const tx = db.transaction("jate", "readwrite");
  //open the store
  const store = tx.objectStore("jate");
  //PUT method to update database with new info
  const request = store.put({id: 1, value: content});
  //verify that it worked!
  const result = await request;
  console.log('success!', result)
}

export const getDb = async () => {
  console.error('getDb working');
  const db = await openDB("jate", 1);
  const tx = db.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  //GET method this time, get all the database info
  const request = store.getAll();
  const result = await request;
  //show it
  return result?.value;
}

initdb();
