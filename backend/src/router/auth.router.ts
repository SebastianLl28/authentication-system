import { Router } from "express";
import {
  getVerifyToken,
  index,
  postLogin,
  postUser,
} from "../controller/auth.controller";
import { validatorSchema } from "../middleware/validatorSchema.middleware";
import { postLoginSchema, postUserSchema } from "../schema/auth.schema";
import { jwtValidator } from "../middleware/validateToken.middleware";

const router = Router();

router.get("/", index);
router.post("/", validatorSchema(postUserSchema), postUser);
router.post("/login", validatorSchema(postLoginSchema), postLogin);
router.get("/verifyToken", jwtValidator, getVerifyToken);
// router.get("/verifyToken", jwtValidator, getProfile);

export default router;
