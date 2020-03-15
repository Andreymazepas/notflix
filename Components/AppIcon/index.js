import React from 'react';
import SvgUri from 'react-native-svg-uri';
const faTV = require('../../svg/tv-solid.svg');
const faFilm = require('../../svg/film-solid.svg');

const icons = {
  faTV: faTV,
  faFilm: faFilm,
};

const Icon = props => (
  <SvgUri fill="white" width="30" height="30" source={icons[props.icon]} />
);

export default Icon;
