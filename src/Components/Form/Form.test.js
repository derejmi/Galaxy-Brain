import Form from "./index.js";
import QuestionContainer from "../../Containers/QuestionContainer.js";
import { shallow } from "enzyme";

describe("Form", () => {
  let component, handleInputChange, handleInputClick;

  const stubPlayers = "2";
  const stubRounds = "3";

  beforeEach(() => {
    handleInputClick = jest.fn();
    handleInputChange = jest.fn();

    component = shallow(
      <Form
        rounds={stubRounds}
        players={stubPlayers}
        handleInputClick={handleInputClick}
        handleInputChange={handleInputChange}
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

  //test for handleInput change!
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

  //test for handleInput change!

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

  //test for handleInputChange

  test("There is button to start the quiz and it has the right text content", () => {
    const startButton = component.find("#button-start");
    expect(startButton).toHaveLength(1);
    expect(startButton.text()).toBe("Start game");
  });

  //test for handleClick
});
