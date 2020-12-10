import Winner from "./Winner.js";
import { shallow } from "enzyme";

describe("Winner", () => {
  let component;

  const stubCurrent = "0";
  const stubPlayers = 3;
  const stubPlayerData1 = [
    { id: 1, player: "player 1", score: 4 },
    { id: 2, player: "player 2", score: 2 },
    { id: 3, player: "player 3", score: 3 },
  ];
  const stubPlayerData2 = [
    { id: 1, player: "player 1", score: 3 },
    { id: 2, player: "player 2", score: 2 },
    { id: 3, player: "player 3", score: 3 },
  ];

  let refreshPage = jest.fn();

  //   // You will usually find `component` name `wrapper` in documentation.
  //   beforeEach(() => {
  //     component = shallow(
  //       <Winner
  //         player={stubPlayers}
  //         current={stubCurrent}
  //         playerData={stubPlayerData}
  //       />
  //     );
  //     //  const winningPlayer = ["player 1"];
  //   });

  test("renders h1 revealing a single winner with 'Game Over! Winners was ...", () => {
    component = shallow(
      <Winner
        player={stubPlayers}
        current={stubCurrent}
        playerData={stubPlayerData1}
        refreshPage={refreshPage}
      />
    );
    expect(component.find("#single-header").text()).toContain(
      "Game Over! Winner was ..."
    );
    expect(component.find("#single-header").text()).toContain(
      "player 1 | Score:4"
    );
  });

  test("expect the refreshPage button to exist when having a single winner", () => {
    component = shallow(
      <Winner
        player={stubPlayers}
        current={stubCurrent}
        playerData={stubPlayerData1}
        refreshPage={refreshPage}
      />
    );
    const button = component.find("button");
    expect(button).toHaveLength(1);
  });

  test("expect the button to call the refreshPage method after a synthetic click event", () => {
    component = shallow(
      <Winner
        player={stubPlayers}
        current={stubCurrent}
        playerData={stubPlayerData1}
        refreshPage={refreshPage}
      />
    );
    const button = component.find("button");
    window.history.pushState({}, "title", "/testJest");
    delete window.location;
    window.location = { reload: jest.fn() };
    button.simulate("click");
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });

  test("renders h1 revealing multiple winners with 'Game Over! Winners were ...", () => {
    component = shallow(
      <Winner
        player={stubPlayers}
        current={stubCurrent}
        playerData={stubPlayerData2}
        refreshPage={refreshPage}
      />
    );

    expect(component.find("#multiple-header").text()).toContain(
      "Game Over! Winners were ..."
    );
    expect(component.find("#multiple-header").text()).toContain(
      "player 1 | Score:3, player 3 | Score:3"
    );
  });

  test("expect the refreshPage button to exist when having multiple winners", () => {
    component = shallow(
      <Winner
        player={stubPlayers}
        current={stubCurrent}
        playerData={stubPlayerData2}
        refreshPage={refreshPage}
      />
    );
    const button = component.find("button");
    expect(button).toHaveLength(1);
  });
});
