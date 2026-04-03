const reviewSchema = {
  _id: objectId,
  order_id: integer, // !!!
  customer_id: integer, // !!!
  score: integer,
  comment: string,
  created_at: date
}