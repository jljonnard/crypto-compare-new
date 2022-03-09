import { buttons } from "../src/models/chartButtons";
import { clickElement, inputText, shouldBeInDOM } from "./basics";

export const clickOnAllChartsButtons = async () => {
    for (let j = 0; j < 6; j++) {
        await clickElement("#button-" + buttons[j].legend);
    }
};

export const typeAndWaitForResults = async (text: string, results: boolean) => {
    await inputText("#searchWrapper-center", text);
    await shouldBeInDOM("#searchResult-0", results);
};
