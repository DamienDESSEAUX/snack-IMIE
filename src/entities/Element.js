import React from 'react'
import { CellTypes } from 'components/Cell'



function Element(line, column, cellType) {
    this.line = line;
    this.column = column;
    this.cellType = cellType;
}

export default Element