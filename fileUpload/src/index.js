const express = require("express");
const multer = require("multer");
const app = express();
const path = require("path");

// connect to db
const connect_db = require("./configs/db");
connect_db();

// listening to port 3010;
app.listen(3010);

// multer stuffs
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, "./images"));
    },
    filename : (req, file, cb) => {
        let prefix = Math.floor((Math.random()*100)).toString();
        console.log(prefix);
        cb(null, `${prefix}-${file.originalname}`);
    }
});

const upload = multer({storage : storage});

const uploadSingle = (fileKey) => {
    return function (req, res, next) {
      const uploadItem = upload.single(fileKey);
      uploadItem(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(500).send(err.message);
        } else if (err) {
          return res.status(500).send(err.message);
        }
        // Everything went fine.
        next();
      });
    };
  };

app.post("/single", uploadSingle("pic"), async(req, res) => {
    try{
        console.log(req.file);
        res.send("profile picture uploaded!");
    }catch(error){
        res.send(error.message);
    }   
})

