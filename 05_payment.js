const paymentSchema = {
    _id: objectId,
    order_id: integer, // !!!
    total_amount: number,
    payment_method: string, // !!!
    payment_status: string, // !!!
    paid_at: date,
}