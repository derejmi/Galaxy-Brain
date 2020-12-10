import App from "../App";

describe("App", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  test("it renders", () => {
    expect(component).toExist;
  });

  test("the header renders with the title 'Galaxy Brain", () => {
    const header = component.find("h1");
    expect(header.text()).toBe("Galaxy Brain");
    expect(header).toHaveLength(1);
  });
});
