import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { ReactWrapper, Headline, Title, ElementContainer, ElementDescription } from './layout/layoutBuilders-styles';
import { Button } from './components/button/button-styles';
import { FONT_FAMILY_BASE, FONT_SIZE_BASE, LINE_HEIGHT_BASE, TEXT_COLOR_BASE } from './tokens/typography'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }
  
  img, fieldsetm, button {
    border: none;
  }
  a, object, button {
    outline: none !important;
  }
  
  html {
    height: 100%;
    min-height: 100%;
    background: #ffffff;
    color: #000;
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    min-width: 320px;
    height: 100%;
    color: ${TEXT_COLOR_BASE};
    font-family: ${FONT_FAMILY_BASE};
    font-size: ${FONT_SIZE_BASE};
    line-height: ${LINE_HEIGHT_BASE};
  }
  
  h1, h2, h3, h4, h5, h6 {
    display: block;
    font-size: 100%;
    font-weight: bold;
  }
  
  article, aside, details, figcaption, figure, footer, header, nav, section, summary, video, img, object, iframe {
    display: block;
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <ReactWrapper>
        <Title>fun with css</Title>
        <Headline>styled components</Headline>
        <ElementContainer>
          <Button>boczek</Button>
          <ElementDescription>default button</ElementDescription>
        </ElementContainer>
        <ElementContainer>
          <Button lightWeight>boczek</Button>
          <ElementDescription>light-weight button</ElementDescription>
        </ElementContainer>
        <ElementContainer>
          <Button>boczek</Button>
          <ElementDescription>neutral-style button</ElementDescription>
        </ElementContainer>
        <ElementContainer>
          <Button>boczek</Button>
          <ElementDescription>success-style button</ElementDescription>
        </ElementContainer>
        <ElementContainer>
          <Button>boczek</Button>
          <ElementDescription>danger-style button</ElementDescription>
        </ElementContainer>
        <ElementContainer>
          <Button lightWeight>boczek</Button>
          <ElementDescription>light-weight neutral-style button</ElementDescription>
        </ElementContainer>
        <ElementContainer>
          <Button lightWeight>boczek</Button>
          <ElementDescription>light-weight success-style button</ElementDescription>
        </ElementContainer>
        <ElementContainer>
          <Button lightWeight>boczek</Button>
          <ElementDescription>light-weight danger-style button</ElementDescription>
        </ElementContainer>
        <ElementContainer>
          <Button lightWeight>boczek</Button>
          <ElementDescription>default large-size button</ElementDescription>
        </ElementContainer>
        <ElementContainer>
          <Button>boczek</Button>
          <ElementDescription>default small-size button</ElementDescription>
        </ElementContainer>
        <ElementContainer>
          <Button lightWeight>boczek</Button>
          <ElementDescription>default light-weight large-size button</ElementDescription>
        </ElementContainer>
        <ElementContainer>
          <Button lightWeight>boczek</Button>
          <ElementDescription>default light-weight small-size button</ElementDescription>
        </ElementContainer>
        <ElementContainer>
          <Button>boczek</Button>
          <ElementDescription>default stretched-size button</ElementDescription>
        </ElementContainer>
        <ElementContainer>
          <Button lightWeight>boczek</Button>
          <ElementDescription>default light-weight stretched-size button</ElementDescription>
        </ElementContainer>
      </ReactWrapper>
    )
  }
}