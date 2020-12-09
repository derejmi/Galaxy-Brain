import Form from "../index.js";
import stubCategories from "./Form.dummy.js";
import { shallow } from "enzyme";

describe("Form", () => {
  let component, handleInputChange, handleClick, compClick, handleInputC;

  const stubPlayers = "2";
  const stubRounds = "3";
  const stubDifficulty = "easy";

  beforeEach(() => {
    handleClick = jest.fn();
    handleInputChange = jest.fn();
    compClick = jest.fn();
    handleInputC = jest.fn();

    component = shallow(
      <Form
        handleClick={handleClick}
        handleInputChange={handleInputChange}
        rounds={stubRounds}
        players={stubPlayers}
        difficulty={stubDifficulty}
        categories={stubCategories}
        compClick={compClick}
        handleInputC={handleInputC}
      />
    );
  });

  //test for h2 header

  test("It has a heading telling the user to select players and rounds", () => {
    expect(component.find("#select").text()).toBe(
      "Select number of players and rounds"
    );
  });

  //player form tests

  test("It renders a player number form and expects a number input", () => {
    let form = component.find("#form-players");
    expect(form).toHaveLength(1);
    const input = form.find("#input-players");
    expect(input.props().type).toBe("number");
  });

  test("The form is able to read from props to show its value", () => {
    const input = component.find("#input-players");
    expect(input.props().value).toBe("2");
  });

  test("it updates state on user input", () => {
    const input = component.find("#input-players");

    input.simulate("change", { target: { value: "3" } });
    expect(handleInputChange).toHaveBeenNthCalledWith(1, {
      target: { value: "3" },
    });
  });

  //player round tests

  test("It renders a player round form and expects a number input", () => {
    let form = component.find("#form-rounds");
    expect(form).toHaveLength(1);
    const input = form.find("#input-rounds");
    expect(input.props().type).toBe("number");
  });

  test("The form is able to read from props to show its value", () => {
    const input = component.find("#input-rounds");
    expect(input.props().value).toBe("3");
  });

  test("it calls on handleInputChange after an onChange synthetic event", () => {
    const input = component.find("#input-rounds");
    // const parent = shallow(<QuestionContainer />);
    // const initState = parent.state("players");
    input.simulate("change", { target: { value: "5" } });
    // const newState = parent.state("players");
    expect(handleInputChange).toHaveBeenNthCalledWith(1, {
      target: { value: "5" },
    });
    // expect(newState).not.toEqual(initState);
  });

  //difficulty selection tests
  test("A difficulty form is rendered with a heading telling the user to choose a difficulty", () => {
    let form = component.find("#form-difficulty");
    expect(form).toHaveLength(1);
    let header = form.find("h2");
    expect(header.text()).toBe("Choose a difficulty");
  });

  test("The form has 4 buttons for the difficulty levels,with each showing the right text", () => {
    let form = component.find("#form-difficulty");

    const buttons = form.find("button");
    expect(buttons).toHaveLength(4);

    let easyButton = form.find("#button-easy");
    expect(easyButton.text()).toBe("Easy");

    let mediumButton = form.find("#button-medium");
    expect(mediumButton.text()).toBe("Medium");

    let hardButton = form.find("#button-hard");
    expect(hardButton.text()).toBe("Hard");

    let randomButton = form.find("#button-random");
    expect(randomButton.text()).toBe("Random");
  });

  //test for handleClick

  test("The easy buttton calls on handleInputChange after an onClick synthetic event", () => {
    const form = component.find("#form-difficulty");
    const button = form.find("#button-easy");
    button.simulate("click");
    expect(handleInputChange).toHaveBeenCalledTimes(1);
  });

  test("The medium buttton calls on handleInputChange after an onClick synthetic event", () => {
    const form = component.find("#form-difficulty");
    const button = form.find("#button-medium");
    button.simulate("click");
    expect(handleInputChange).toHaveBeenCalledTimes(1);
  });

  test("The hard buttton calls on handleInputChange after an onClick synthetic event", () => {
    const form = component.find("#form-difficulty");
    const button = form.find("#button-hard");
    button.simulate("click");
    expect(handleInputChange).toHaveBeenCalledTimes(1);
  });

  test("The random buttton calls on handleInputChange after an onClick synthetic event", () => {
    const form = component.find("#form-difficulty");
    const button = form.find("#button-random");
    button.simulate("click");
    expect(handleInputChange).toHaveBeenCalledTimes(1);
  });

  test("There is button to start the quiz and it has the right text content", () => {
    const startButton = component.find("#button-start");
    expect(startButton).toHaveLength(1);
    expect(startButton.text()).toBe("Start game");
  });

  //test for handleClick
  test("The random buttton calls on handleClick after an onClick synthetic event", () => {
    const button = component.find("#button-start");
    button.simulate("click");
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
