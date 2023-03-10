import { getDb } from "@/configs/firebaseinit";
import { action, computed, thunk } from "easy-peasy";

export const plans = {
  plans: [],
  ///
  //actions
  ///
  setPlans: action((state: any, payload) => {
    state.plans = [...state.plans, payload];
  }),

  ///
  //Side effects
  ///
  getPlans: thunk(async (action: any) => {
    try {
      const ref = getDb().ref("plans");
      let plans: any = [];
      await ref.on("value", (snapshot) => {
        snapshot.forEach((data) => {
          const dataVal = data.val();
          console.log("plans", dataVal);
          action.setPlans(dataVal);
          // plans = [...plans, dataVal];
        });
      });
      // debugger;
      // action.setPlans(plans);
    } catch (error) {
      console.error(error);
    }
  }),
};

export default plans;
