const customerSchema = {
    _id: objectId,
    full_name: string,
    last_name: string,
    username: string,
    password: string, // !!!
    shoe_size: number,
    phone: number,
    address: {
        city: string,
        district: string,
        post_code: number
    },
    history: {
        rental_history: string,
        track_history: varchar,
        review_history: varchar,
    },
    created_at: Date,
}