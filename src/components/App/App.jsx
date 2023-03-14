import React, { Component } from "react";
import FeedbackInputInterface from "../FeedbackInputInterface/FeedbackInputInterface"
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";

import { GlobalStyle } from "../GlobalStyle";
import { MainContainer } from "./App.styled";

class App extends Component{
   state = {
    good: 0,
    neutral: 0,
    bad: 0
   };
  
  onLeaveFeedback = (event) => {
    const stateKey = event.target.name;
    return this.setState(prevState => ({
      [stateKey]: prevState[stateKey] + 1
    })); 
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad; 
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return (this.state.good ? this.state.good * 100 / total : 0);
  } 

  render() {
    return (<MainContainer>
      <Section title="Please leave your feedback">
        <FeedbackInputInterface
          onLeaveFeedback={this.onLeaveFeedback}
            options={this.state} />
      </Section>
      <Section title='Statistics'>
        <Statistics
               stats={this.state} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
      <GlobalStyle/>
      </Section>
      </MainContainer>
          );
  }
};

export default App