import React from 'react'

export const levelTypes = {
  noob: 'noob',
  normal: 'normal'
}

function OptionGame(lines, columns, levelType) {
  this.lines = lines;
  this.columns = columns;
  this.levelType = levelType;
}

export default OptionGame