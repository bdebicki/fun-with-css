import React from 'react';
import styled from 'styled-components';
import { BLUE_BASE } from '../../tokens/colors'
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
	border: 1px solid ${BLUE_BASE};
	align-items: center;
	justify-content: center;
	background: ${props => props.lightWeight ? 'none' : BLUE_BASE};
	color: ${props => props.lightWeight ? BLUE_BASE : '#fff'};
	font-family: ${FONT_FAMILY_BASE};
	text-decoration: none;
	user-select: none;
	
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
`;