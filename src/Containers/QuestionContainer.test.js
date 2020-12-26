import QuestionContainer from "./QuestionContainer.js";
import stubCategories from "../Components/Form/Test/Form.dummy.js";
import { shallow } from "enzyme";
import jestFetchMock from 'jest-fetch-mock';
jestFetchMock.enableMocks()

describe('QuestionContainer', () => {
    let component,handleInputC, compClick, handleInputChange, handleClick;

    const stubQuestionNumber = 0;
    const stubPlayerStats = [
        { id: 1, player: "player 1", score: 0 },
      ]
    const stubPlayers=0
    const stubDifficulty='easy'
    const stubRounds=0
    const stubTotal=""
    const stubOption=0
    const stubSelection=[
        {
          category: "UG9saXRpY3M=",
          type: "bXVsdGlwbGU=",
          difficulty: "bWVkaXVt",
          question:
            "V2hvIHdhcyB0aGUgQnJpdGlzaCBQcmltZSBNaW5pc3RlciBhdCB0aGUgb3V0YnJlYWsgb2YgdGhlIFNlY29uZCBXb3JsZCBXYXI/",
          correct_answer: "TmV2aWxsZSBDaGFtYmVybGFpbg==",
          incorrect_answers: [
            "Q2xlbWVudCBBdHRsZWU=",
            "V2luc3RvbiBDaHVyY2hpbGw=",
            "U3RhbmxleSBCYWxkd2lu",
          ],
        },
      ];
    const stubCurrent=0

    it("it renders starting form", () => {
        component = shallow(
            <QuestionContainer 
            questionNumber={stubQuestionNumber}
            players={stubPlayers}
            rounds={stubRounds}
            difficulty={stubDifficulty}
            categories={stubCategories}
            />)
        expect(component.find('Form')).toHaveLength(1);
    });
    test("it renders the questions screen", () => {
        component = shallow(
            <QuestionContainer 
            current={stubCurrent}
            playerStats={stubPlayerStats}
            questionNumber={stubQuestionNumber}
            selection={stubSelection}
            total={stubTotal}
            />)
            component.setState({ questionNumber: 1})
            component.setState({ total: 1})
            expect(component.find('Question')).toHaveLength(1);
    });
    test("it renders a page warning player to fill in details", () => {
        component = shallow(
            <QuestionContainer 
            questionNumber={stubQuestionNumber}
            total={stubTotal}
            />)
            component.setState({ questionNumber: 1})
            component.setState({ total: ""})
            expect(component.find('.message')).toHaveLength(1);
    });
    test("it renders winners screen", () => {
        component = shallow(
            <QuestionContainer 
            players={stubPlayers}
            playerStats={stubPlayerStats}
            rounds={stubRounds}
            selection={stubSelection}
            playerStats={stubPlayerStats}
            />)
            component.setState({ questionNumber: 2})
            component.setState({ total: 1})
            component.setState({ rounds: 1})
        expect(component.find('Winner')).toHaveLength(1);
    });
    test('fetch api', async(done) => {
        let fakeresponse={ id: 9, name: "General Knowledge" }
        fetch.mockresponse(JSON.stringify(fakeresponse))
        await(fakeresponse.id).toEqual(9)
        done()
    })
})
