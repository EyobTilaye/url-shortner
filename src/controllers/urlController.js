const shortToLong = new Map();
const longToShort = new Map();
const baseUrl = "http://locahost:3000/";

export const urlShortener = (req, res, next) => {
    const { longUrl } = req.body;
    const baseUrl = "http://localhost:3000/";
    const existedUrl = longToShort.get(longUrl);

    if (existedUrl) {
        res.send("shortned url: " + existedUrl);
    }
    const codedUrl = urlCode();
    const shortUrl = baseUrl + codedUrl;
    longToShort.set(longUrl, codedUrl);
    shortToLong.set(codedUrl, longUrl);
    console.log(longToShort);
    console.log(shortToLong);

    res.status(200).json({ shortenedUrl: shortUrl });
};

export const urlRedirector = (req, res, next) => {
    const { shorten } = req.params;
    console.log(shorten);
    const longUrl = shortToLong.get(shorten);
    console.log(longUrl);
    if (longUrl) {
        return res.status(301).redirect(longUrl);
    } else {
        return res.status(404).send("Page not found");
    }
};

function urlCode() {
    const characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 62);
        code += characters[randomIndex];
    }
    return code;
}
