const rentOrderSchema = {
    _id: objectId,
    customer_id: integer, // !!!
    shoe: {
        shoe_brand: varchar,
        shoe_model: varchar,
        shoe_size: number,
    },
    retal_status: {
        start: date,
        end: date,
    },
    total_price: number,
    created_at: date,
}