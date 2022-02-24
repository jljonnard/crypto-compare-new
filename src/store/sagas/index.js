import { all } from "redux-saga/effects";
import chartSagas from "./chart";
import coinSagas from "./coinData";
import homeSagas from "./homeData";

export default function* rootSaga() {
    yield all([...homeSagas, ...coinSagas, ...chartSagas]);
}
