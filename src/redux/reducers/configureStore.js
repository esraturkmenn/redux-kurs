/*eslint-disable no-unused-vars*/

import {createStore} from "redux"//reducerların tamamını içeren(combineleri)

import reducers from "./index"

export default function configureStore(){
return createStore(reducers);
}
