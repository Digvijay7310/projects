// validations/user.validation.js
import Joi from "joi";

export const userRegisterSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name should be at least 3 characters",
  }),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
// controllers/user.controller.js
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { userRegisterSchema } from "../validations/user.validation.js";

export const registerUser = async (req, res, next) => {
  try {
    const { error, value } = userRegisterSchema.validate(req.body);
    if (error) {
      throw new ApiError(400, error.details[0].message);
    }

    // Dummy example: new user
    const user = { id: 1, ...value };

    return res
      .status(201)
      .json(new ApiResponse(201, user, "User registered successfully"));
  } catch (err) {
    next(err); // send to error middleware
  }
};
// routes/user.routes.js
import express from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", registerUser);

export default router;
// server.js
import express from "express";
import userRoutes from "./routes/user.routes.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

// Error middleware (always last)
app.use(errorMiddleware);

app.listen(5000, () => console.log("Server running on port 5000"));
