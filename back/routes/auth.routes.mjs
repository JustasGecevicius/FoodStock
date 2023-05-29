import { verifySignUp } from "../middlewares/verifySignUp.mjs";
import { signup, signin } from "../controllers/auth.controller.mjs";

export default (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    signup
  );

  app.post("/api/auth/signin", signin);
};
