const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const path = require("path");
const serverKey = process.env.SERVER_KEY
const clientKey = process.env.CLIENT_KEY

const app = express();
app.use(express.static(__dirname + '/dist/poutchigang'))
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true, methods: 'POST,GET,PUT,OPTIONS,DELETE' }));

const stripe = require("stripe")(serverKey);

app.get("/*", (req, resp) => {
    resp.sendFile(path.join(__dirname + 'dist/poutchigang/index.html'))

});

app.post("/checkout", async (req, resp, next) => {
    try {

        const session = await stripe.checkout.sessions.create({
            shipping_address_collection: { allowed_countries: ['BE', 'FR'] },
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: { amount: 500, currency: 'eur' },
                        display_name: 'Frais de livraison',

                    },
                },
            ],
            line_items: req.body.items.map((item) => ({
                price_data: {
                    currency: "eur",
                    product_data: {
                        name: item.Title,
                        description: 'Taille: ' + item.Taille[0],
                        images: [item.ImageCheckout],

                    },
                    unit_amount: item.Price * 100
                },
                quantity: item.Quantity,

            }
            )
            ),
            mode: "payment",
            success_url: "https://poutchigang.be/boutique/success?session_id={CHECKOUT_SESSION_ID}",
            cancel_url: "https://poutchigang.be/boutique/cancel",

        });

        resp.status(200).json(
            session
        )


    } catch (error) {
        next(error);
        // resp.status(500).send({ error: error });

    }
});
const port = process.env.PORT || 4242;

app.listen(port, () => console.log(`server listening on port ${port}`));


