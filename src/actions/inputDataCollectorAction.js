
import { INPUT_DATA_COLLECTOR } from "./actionTypes"

export const inputDataCollector = (payload) => {
  return {
    type: INPUT_DATA_COLLECTOR,
    payload, 
  }
}

