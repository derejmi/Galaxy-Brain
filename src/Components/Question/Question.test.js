import Question from "./Question.js";
import { shallow } from "enzyme";

describe("Question", () => {
  let component;

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
    component = shallow(
      <Question data={stubData} questionNumber={stubQuestionNumber} />
    );
  });

  test("renders Quiz question", () => {
    expect(component.find("p").text()).toContain(
      "Who was the British Prime Minister at the outbreak of the Second World War?"
    );
  });
});
