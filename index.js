require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? [/\.ikodi.eu\/?$/]
      : [/^http:\/\/localhost\:\d{4}$/],
  credentials: true,
};
const nodeMailer = require("nodemailer");

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("build"));

/* ------------------------ */
app.get("/", (res, req) => res.sendFile("index.html"));

app.post("/feedback", async (req, res) => {
  const data = req.body.values;
  console.log(JSON.stringify(data, 0, 2));

  const message = {
    from: '"feedback" <contact@ikodi.eu>',
    to: "jupellin39@gmail.com",
    subject: "Formulaire de feedback",
    text: `${JSON.stringify(data)}`,
    html: `<pre>${JSON.stringify(data, 0, 2)}</pre>`,
  };

  try {
    let transporter = nodeMailer.createTransport({
      host: "mail.gandi.net",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "contact@ikodi.eu",
        pass: process.env.EMAIL_PWD,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail(message);

    console.log(info);

    res.json({ message: "Les données ont bien été transmises" });
  } catch (error) {
    console.log(error.response ? error.response.message : error);
    res.json({
      message:
        "Aïe ça n'a pas fonctionné, le dev a dû arrêter le serveur, ça arrive parfois... désolé",
    });
  }
});

const PORT = process.env.PORT || 5555;
app.listen(PORT, () =>
  console.log(`serveur feedback listening on port ${PORT}`)
);
