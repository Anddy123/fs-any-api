const pool = require('../utils/pool');

module.exports = class Fish {
  id;
  name;
  price;
  image;
  description;
  category;

  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.price = row.price;
    this.image = row.image;
    this.description = row.description;
    this.category = row.category;
  }

  static async getAll(){
    const results = await pool.query(`
            SELECT * FROM fishs
        `);
    return results.rows.map(row => new Fish(row));
  }
};
