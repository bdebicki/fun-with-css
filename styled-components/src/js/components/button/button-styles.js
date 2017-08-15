import React from 'react';
import styled from 'styled-components';
import { BLUE_BASE, BLUE_LIGHTEN_10, BLUE_LIGHTEN_30 } from '../../tokens/colors'
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
	user-select: none;
		
	${props => {
	  if (props.lightWeight) {
	    return `
	      border-color: ${BLUE_LIGHTEN_30};
        background: none;
        color: ${BLUE_BASE};
  
        &:hover {
          border-color: ${BLUE_BASE};
          background: ${BLUE_BASE};
          color: #fff;
        }
    `;
    } else {
	    return `
 	      border-color: ${BLUE_BASE};
        background: ${BLUE_BASE};
        color: #fff;
        
        &:hover {
	        border-color: ${BLUE_LIGHTEN_10};
          background: ${BLUE_LIGHTEN_10};
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
  
  ${props => {
    if (props.strechedSize) {
      return `
        width: 100%;
      `;
    }  
  }}
`;