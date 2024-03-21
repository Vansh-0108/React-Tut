import {render} from "@testing-library/react"
import { Footer, Header } from './components'

describe("When header component loads", () => {

    beforeEach(() => {
        render(<Header />)
    })

    it("should test", () => {
        expect(123).toBe(123);
    })
})