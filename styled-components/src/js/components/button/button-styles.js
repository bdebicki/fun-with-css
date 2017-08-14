import React from 'react';
import styled from 'styled-components';
import { BLUE_BASE } from '../../tokens/colors'
import { FONT_FAMILY_BASE, FONT_SIZE_BASE, LINE_HEIGHT_BASE } from '../../tokens/typography'

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
	height: ${BTN_SHARED_PROPS.SIZE_BASE};
	padding: ${BTN_SHARED_PROPS.PADDING_BASE};
	border-radius: 2px;
	align-items: center;
	justify-content: center;
	background: ${BLUE_BASE};
	color: #fff;
	font-family: ${FONT_FAMILY_BASE};
	font-size: ${FONT_SIZE_BASE};
	line-height: ${LINE_HEIGHT_BASE};
	text-decoration: none;
	user-select: none;
`;