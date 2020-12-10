import Score from './Score'
import { ReactWrapper, shallow,  } from "enzyme";

describe("Score", () => {
    let wrapper
    // let score = jest.fn();
  
    beforeEach(() => {
      
      const stubCurrent = "1"
      const stubPlayerData1 = [
        { id: 1, player: "player 1", score: 4 },
        { id: 2, player: "player 2", score: 2 },
        { id: 3, player: "player 3", score: 3 },
      ];
      wrapper = shallow(<Score current={stubCurrent} playerData={stubPlayerData1}/>)
    })
   
    test("it renders somethign", () => {
      expect(wrapper.find("#s").text()).toContain(
        "Player"
      )
    })
    test("it renders somethign", () => {
      expect(wrapper.find("#ss").text()).toContain(
        "Score"
      )
    })
  })