import { assertInputText, clickElement, inputText, reloadPage } from "./basics"
import { clickOnAllChartsButtons, typeAndWaitForResults } from "./models";

fixture`Barre de recherche sur page d'accueil`.page`localhost:3000`;

test("Recherche", async () => {
    await reloadPage()
    await typeAndWaitForResults("b", false)
    await typeAndWaitForResults("i", false)
    await typeAndWaitForResults("t", true)
    await inputText("#searchWrapper-center", "coin");
    await assertInputText("#searchWrapper-center", "bitcoin")
    await clickElement("#searchResult-2")
    await clickOnAllChartsButtons()
});

test("Recherche puis tab", async () => {
    await reloadPage()
    await typeAndWaitForResults("b", false)
    await typeAndWaitForResults("i", false)

});

