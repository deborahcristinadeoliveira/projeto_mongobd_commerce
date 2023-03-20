db.produtos.updateMany({ "valoresNutricionais.2.percentual": { $gt: 20, $lt: 40 } },
  { $addToSet: { tags: { $each: ["contém sódio"] } } });
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });