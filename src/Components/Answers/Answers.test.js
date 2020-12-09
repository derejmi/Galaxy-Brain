import Answers from "./Answers.js";
import { shallow } from "enzyme";

describe("Answers", () => {
  let component, handleAnswerClick;

  const stubData = [
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
    {
      category: "QXJ0",
      type: "bXVsdGlwbGU=",
      difficulty: "ZWFzeQ==",
      question: "V2hvIHBhaW50ZWQgdGhlIFNpc3RpbmUgQ2hhcGVsPw==",
      correct_answer: "TWljaGVsYW5nZWxv",
      incorrect_answers: [
        "TGVvbmFyZG8gZGEgVmluY2k=",
        "UGFibG8gUGljYXNzbw==",
        "UmFwaGFlbA==",
      ],
    },
    {
      category: "RW50ZXJ0YWlubWVudDogVmlkZW8gR2FtZXM=",
      type: "bXVsdGlwbGU=",
      difficulty: "aGFyZA==",
      question:
        "V2hhdCBpcyB0aGUgZmFzdGVzdCBzcGVlZCBwb3NzaWJsZSBpbiBUcmFja21hbmlhwrI6IFN0YWRpdW0/",
      correct_answer: "MTAwMCAga20vaA==",
      incorrect_answers: ["NTAwIGttL2g=", "MzIwIGttL2g=", "MTAwIGttL2g="],
    },
  ];
  const stubQuestionNumber = 1;

  // You will usually find `component` name `wrapper` in documentation.
  beforeEach(() => {
    handleAnswerClick = jest.fn();
    component = shallow(
      <Answers
        data={stubData}
        questionNumber={stubQuestionNumber}
        handleAnswerClick={handleAnswerClick}
      />
    );
  });

  test("renders 4 Quiz answer buttons ", () => {
    let answers = component.find("button");
    expect(answers).toHaveLength(4);
  });

  test("expect option 1 to call on handleAnswerClick upon an onClick synthestic event", () => {
    let answers = component.find("button");
    let firstAnswer = answers.at(0);
    firstAnswer.simulate("click");
    expect(handleAnswerClick).toHaveBeenCalledTimes(1);
  });

  test("expect option 2 to call on handleAnswerClick upon an onClick synthestic event", () => {
    let answers = component.find("button");
    let firstAnswer = answers.at(1);
    firstAnswer.simulate("click");
    expect(handleAnswerClick).toHaveBeenCalledTimes(1);
  });
  test("expect option 3 to call on handleAnswerClick upon an onClick synthestic event", () => {
    let answers = component.find("button");
    let firstAnswer = answers.at(2);
    firstAnswer.simulate("click");
    expect(handleAnswerClick).toHaveBeenCalledTimes(1);
  });
  test("expect option 4 to call on handleAnswerClick upon an onClick synthestic event", () => {
    let answers = component.find("button");
    let firstAnswer = answers.at(3);
    firstAnswer.simulate("click");
    expect(handleAnswerClick).toHaveBeenCalledTimes(1);
  });
});
