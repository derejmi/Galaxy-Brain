import React from "react";

// in setupTests
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

//import sinon from "sinon"; - optional

global.React = React;
global.shallow = shallow;
//global.sinon = sinon; // optional, if using sinon library
