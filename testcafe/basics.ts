import { ClientFunction, Selector, t } from "testcafe";

const LONG_TIMEOUT = 20000

export const inputText = async (selector: string, text: string): Promise<void> => {
    const element = Selector(selector)
    await t.hover(element).typeText(element, text)
}

export const clickElement = async (selector: string): Promise<void> => {
    console.log('')
    console.log('click element: ', selector)
    const element = Selector(selector)
    await t.expect(element.visible).ok({ timeout: LONG_TIMEOUT })
    await t.hover(element).click(element)
}

export const shouldBeInDOM = async (selector: string, isInDOM = true): Promise<void> => {
    console.log('selector', selector)
    if (isInDOM) {
        const element = Selector(selector)
        await t.expect(element.visible).ok({ timeout: LONG_TIMEOUT })
    } else {
        const element = Selector(selector)
        await t.expect(element.exists).notOk()
    }
}

export const assertInputText = async (selector: string, expectedText: string): Promise<void> => {
    console.log('')
    console.log('assert input text')
    console.log('selector', selector)
    console.log('text', expectedText)
    const input = Selector(selector)
    await t.hover(selector).expect(input.value).eql(expectedText)
}

export const reloadPage = async (): Promise<void> => {
    console.log('')
    console.log('*******Reloading page*******')
    await ClientFunction(() => {
        document.location.reload()
    })()
}

export const setViewport = async (width: number, height: number): Promise<void> => {
    await t.resizeWindow(width, height)
}