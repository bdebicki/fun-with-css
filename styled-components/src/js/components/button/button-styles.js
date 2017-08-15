import React from 'react';
import styled from 'styled-components';
import { SILVER, GRAY, BLUE, RED, GREEN } from '../../tokens/colors'
import { FONT_FAMILY_BASE, FONT_SIZE_BASE, FONT_SIZE_SMALL, LINE_HEIGHT_BASE, LINE_HEIGHT_SMALL } from '../../tokens/typography'

const BTN_SHARED_PROPS = {
  SIZE_BASE: '34px',
  SIZE_SMALL: '24px',
  SIZE_LARGE: '50px',
  PADDING_BASE: '0 20px',
  PADDING_SMALL: '0 10px',
  PADDING_LARGE: '0 24px'
};

export const Button = styled.button`
	display: flex;
	border-radius: 2px;
	border-width: 1px;
	border-style: solid;
	align-items: center;
	justify-content: center;
	font-family: ${FONT_FAMILY_BASE};
	text-decoration: none;
	cursor: pointer;
	user-select: none;
	
	${props => { // default style + color versions
	  if (!props.lightWeight && props.neutralStyle) {
	    return `
	      border-color: ${SILVER.BASE};
	      background: ${SILVER.BASE};
	      color: ${SILVER.LIGHTEN_10};
	      
	      &:hover {
          border-color: ${SILVER.DARKEN_5};
          background: ${SILVER.DARKEN_5};
          color: ${SILVER.LIGHTEN_5};
	      }
	    `;
    } else if (!props.lightWeight && props.successStyle) {
      return `
	      border-color: ${GREEN.BASE};
	      background: ${GREEN.BASE};
        color: #fff;
	      
	      &:hover {
          border-color: ${GREEN.LIGHTEN_10};
          background: ${GREEN.LIGHTEN_10};
	      }
	    `;
    } else if (!props.lightWeight && props.dangerStyle) {
      return `
	      border-color: ${RED.LIGHTEN_5};
	      background: ${RED.LIGHTEN_5};
        color: #fff;
	      
	      &:hover {
          border-color: ${RED.BASE};
          background: ${RED.BASE};
	      }
	    `;
    } else {
      return `
 	      border-color: ${BLUE.BASE};
        background: ${BLUE.BASE};
        color: #fff;
        
        &:hover {
	        border-color: ${BLUE.LIGHTEN_10};
          background: ${BLUE.LIGHTEN_10};
        }
	    `;
    }
  }}
		
	${props => { // weight style + color versions
    if (props.lightWeight && props.neutralStyle) {
      return `
        border-color: ${SILVER.DARKEN_5};
        background: none;
        color: ${GRAY.LIGHTEN_10};
  
        &:hover {
          border-color: ${SILVER.LIGHTEN_1};
          background: ${SILVER.LIGHTEN_1};
          color: ${GRAY.LIGHTEN_5};
        }
      `;
    } else if (props.lightWeight && props.successStyle) {
      return `
        border-color: ${GREEN.LIGHTEN_15};
        background: ${GREEN.PALE};
        color: ${GREEN.BASE};
  
        &:hover {
          border-color: ${GREEN.BASE};
          background: ${GREEN.BASE};
          color: #fff;
        }
      `;
    } else if (props.lightWeight && props.dangerStyle) {
      return `
        border-color: ${RED.LIGHTEN_25};
        background: ${RED.PALE};
        color: ${RED.DARKEN_5};
  
        &:hover {
          border-color: ${RED.DARKEN_5};
          background: ${RED.DARKEN_5};
          color: #fff;
        }
      `;
    } else if (props.lightWeight) {
      return `
	      border-color: ${BLUE.LIGHTEN_30};
        background: ${BLUE.PALE};
        color: ${BLUE.BASE};
  
        &:hover {
          border-color: ${BLUE.BASE};
          background: ${BLUE.BASE};
          color: #fff;
        }
      `;
    }
  }}
	
	${props => { // sizes props
    if (props.largeSize) {
      return `
      	height: ${BTN_SHARED_PROPS.SIZE_LARGE};
      	padding: ${BTN_SHARED_PROPS.PADDING_LARGE};
        font-size: ${FONT_SIZE_BASE};
      	line-height: ${LINE_HEIGHT_BASE};
	    `;
    } else if (props.smallSize) {
      return `
      	height: ${BTN_SHARED_PROPS.SIZE_SMALL};
      	padding: ${BTN_SHARED_PROPS.PADDING_SMALL};
        font-size: ${FONT_SIZE_SMALL};
      	line-height: ${LINE_HEIGHT_SMALL};
      `;
    } else {
      return `
      	height: ${BTN_SHARED_PROPS.SIZE_BASE};
      	padding: ${BTN_SHARED_PROPS.PADDING_BASE};
        font-size: ${FONT_SIZE_BASE};
      	line-height: ${LINE_HEIGHT_BASE};
      `;
    }
  }}
  
  ${props => { // width props
    if (props.strechedSize) {
      return `
        width: 100%;
      `;
    }  
  }}
`;