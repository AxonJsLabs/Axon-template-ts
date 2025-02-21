import { Router } from "@axonlabs/core";

import sampleController from "../controllers/sample.controller";
import sampleMiddleware from "../middlewares/sample.middleware";

const router = Router();

router
  .get("/", sampleController.helloWorld)
  .middleware(sampleMiddleware.helloWorld);

export default router;