import { Request } from "express";
import multer, { diskStorage } from "multer";

const PATH_STORAGE = `${process.cwd()}/storage`;

const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb) {
    cb(null, PATH_STORAGE);
  },
  filename(req: Request, file: Express.Multer.File, cb) {
    const ext = file.originalname.split(".").pop();
    const fileNameRandom = `image-${Date.now()}.${ext}`;
    cb(null, fileNameRandom);
  },
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;
