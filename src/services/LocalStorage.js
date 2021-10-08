(
    function() { 

        if (!window.indexedDB) {
            console.log(`Your browser doesn't support IndexedDB`);
            return;
        }
        
        const tasks = [
            {
                id: "1",
                name: "Desafio SalesForce", 
                done: false, 
                type: 1,
            }, 
            {
                id: "2",
                name: "Documentar projeto", 
                done: false, 
                type: 1,
            },
            {
                id: "3",
                name: "Consertar chuveiro", 
                done: false, 
                type: 0,
            }
        ]

        const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        
        const request = indexedDB.open('TODO_Database', 3)        

        request.onupgradeneeded = (event) => {
            let db = event.target.result;
       
            // create the Contacts object store 
            // with auto-increment id
            let store = db.createObjectStore('Tasks', {
                autoIncrement: true
            });
       
            // create an index on the email property
            let index = store.createIndex('id', 'id', {
                unique: true
            });
        };

        request.onsuccess = function(event) {
            const db = event.target.result;

            tasks.forEach( (task) => {
                insertTask(db, task);
            })
        };

        function insertTask(db, task) {
            // create a new transaction
            const txn = db.transaction('Tasks', 'readwrite');

            // get the Contacts object store
            const store = txn.objectStore('Tasks');
            //
            let query = store.put(task);

            // handle success case
            query.onsuccess = function (event) {
                console.log(event);
            };

            // handle the error case
            query.onerror = function (event) {
                console.log(event.target.errorCode);
            }

            // close the database once the 
            // transaction completes
            txn.oncomplete = function () {
                db.close();
            };
        }

    }
)