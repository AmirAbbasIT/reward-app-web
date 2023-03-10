import { createStore, persist } from "easy-peasy";
import plans from "./slices/plans";

const modal = {
  plans: plans,
  // profile: persist(profile,{storage: "localStorage"}),
  // isLoading: persist(isLoading,{storage: "sessionStorage"}),
};

const middleware: any = [];

if (process.env.NODE_ENV !== "production") {
  // should be include in the development environment only
  // const logger = createLogger();
  // middleware.push(logger);
}

const config = {
  middleware,
};

const store = createStore(modal, config);

export default store;
