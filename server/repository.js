// Importing node.js file system module 
const fs = require('fs')
  
class Repository {
  constructor(filename) {
  
    // Filename where data are
    // going to store
    if (!filename) {
      throw new Error(
'Filename is required to create a datastore!')
    }
    this.filename = filename
    try {
      fs.accessSync(this.filename)
    } catch(err) {
  
      // If file not exist it is created 
      // with empty array
      fs.writeFileSync(this.filename, '[]')
    }
  }
  
  async findById(id){
  
    // Read all filecontents of the datastore
    const jsonRecords = await 
        fs.promises.readFile(this.filename, {
      encoding : 'utf8'
    })
  
    // Parsing JSON records in JavaScript
    // object type records
    const objRecord = JSON.parse(jsonRecords)
  
    // Search for required record
    const requiredRecord = 
      objRecord.find(record => record.id === id)
    return requiredRecord
  }
}
  
// 'datastore.json' file created at runtime
// if it does not exist. Here we try to fetch
// information from database using an id that
// means database(datastore.json) already exist
// and there are also records in it.
module.exports = new Repository('items.json')