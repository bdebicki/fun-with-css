import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { ReactWrapper, Headline, Title } from './layout/layoutBuilders-styles';

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
  
  img, fieldset {
    border: none;
  }
  a, object {
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
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 18px;
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
      </ReactWrapper>
    )
  }
}