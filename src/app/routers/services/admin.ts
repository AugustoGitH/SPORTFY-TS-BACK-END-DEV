import { Router } from "express"
import createRouters from "../functions/createRouters"
import { admin } from "../map"
import middleAuthRouters from "../../middlewares/middleAuthRouters"

const router = Router()
createRouters({
  router,
  middleware: (req, res, next) => {
    middleAuthRouters(req, res, next, {
      entitie: "admin",
    })
  },
  routersList: admin,
})

export default router
