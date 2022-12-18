// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// In the Product model:
Product.belongsTo(Category, { foreignKey: 'category_id' });

// In the Category model:
Category.hasMany(Product, { foreignKey: 'category_id' });

// In the Product model:
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' });

// In the Tag model:
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' });



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
