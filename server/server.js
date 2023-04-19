const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const serverKey = process.env.SERVER_KEY


const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true }));

const stripe = require("stripe")(serverKey);

app.post("/checkout", async (req, resp, next) => {
    try {

        const session = await stripe.checkout.sessions.create({
            line_items: req.body.items.map((item) => ({
                price_data: {
                    currency: "eur",
                    product_data: {
                        name: item.Title,
                        images: [item.ImageCheckout]
                    },
                    unit_amount: item.Price * 100
                },
                quantity: item.Quantity
            }
            )),
            mode: "payment",
            success_url: "http://localhost:4200/boutique/success",
            cancel_url: "http://localhost:4242/cancel.html",


        });

        resp.status(200).json(session)

    } catch (error) {
        next(error);
        // resp.status(500).send({ error: error });

    }
});

app.listen(4242, () => console.log("app is running on 4242"));


