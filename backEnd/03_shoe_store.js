const shoeStoreSchema = {
  _id: objectId,
  shoe_model_id: integer, // !!!
  shoe: {
    category: string,
    shoe_brand: string,
    shoe_model: string,
    shoe_size: integer,
    description: string,
    shoe_condition: varchar, // !!!
    shoe_status: varchar, // !!!
  },
  created_at: timestamp
}