import { assertInputText, clickElement, inputText, setViewport, shouldBeInDOM } from "./basics"
import { clickOnAllChartsButtons, typeAndWaitForResults } from "./models";

fixture`Responsive`.page`localhost:3000`;

test("Responsiev navigation", async () => {
    await setViewport(979,900)
    await shouldBeInDOM('#navbar', true)
    await setViewport(979,900)
    await shouldBeInDOM('#navbar', false)
});