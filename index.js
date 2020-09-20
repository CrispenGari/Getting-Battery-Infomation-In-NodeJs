/*
    Getting the battery Infomation in NodeJs
    *   charging state
    *   battery level
    * $npm i battery-level is-charging
*/

import batteryLevel from "battery-level";
import batteryStatus from "is-charging";

batteryLevel()
  .then((result) => {
    if (isNaN(result)) {
      console.log("The computer has no battery");
    } else {
      console.log("The battery level is: ", result * 100 + " %");
    }
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    //
  });
batteryStatus()
  .then((status) => {
    status
      ? console.log("The battery is charging")
      : console.log("The battery is not charging");
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    //
  });
