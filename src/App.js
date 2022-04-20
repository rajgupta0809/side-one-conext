import React, { Fragment } from "react";
import Provider from "./provider";
import Context from "./context";

const Agents = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};

const AgentTwo = () => {
  return <AgentBond />;
};

//this is all agents is just for the proof that we didn't use them and props in them to pass on the values and with the help of contect API readiabilty increases

const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h3>Agent Information</h3>
          <p>Mission name: {context.data.mname}</p>
          <h1>Mission status: {context.data.accept}</h1>
          <button onClick={context.isMissionAccepted}>Choose To Accept</button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
};

export default App;
