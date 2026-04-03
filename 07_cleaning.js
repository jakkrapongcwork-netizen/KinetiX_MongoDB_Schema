const cleaningSchema = {
  _id: objectId,
  order_id: integer, // !!!
  shoe_store_id: integer, // !!!
  partner_id: integer,
  job_type: string,
  status: string,
  total_amount: integer,
  sent_at: timestamp,
  completed_at: date,
}