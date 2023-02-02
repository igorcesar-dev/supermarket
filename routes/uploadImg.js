const multer = require("multer")

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "Uploads")
        },
        filename: (req, file, cb) => {
            cb(
                null,
                file.fieldname + "-" + Date.now() + "-" + file.originalname
            )
        }
    }),
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ) {
            cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error("Only .xlsx format allowed!"))
        }
    }
})