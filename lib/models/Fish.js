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
};
