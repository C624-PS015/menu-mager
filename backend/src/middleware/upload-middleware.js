import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const name = file.originalname.substring(
      0,
      file.originalname.lastIndexOf("."),
    );
    const suffix = Date.now() + "." + file.mimetype.split("/")[1];
    cb(null, name + "-" + suffix);
  },
});

const upload = multer({ storage: storage });

export default upload;
