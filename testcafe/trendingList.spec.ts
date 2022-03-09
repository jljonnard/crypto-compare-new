import { clickElement } from "./basics";
import { clickOnAllChartsButtons } from "./models";

fixture`Trending List`.page`localhost:3000`;

for (let i = 0; i < 2; i++) {
    test("Trending List - Coin n°" + i.toString(), async () => {
        await clickElement("#trendingCoin-" + i.toString());
        await clickOnAllChartsButtons();
        await clickElement("#nav-header");
    });
}
