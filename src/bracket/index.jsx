import React from 'react'
import PropTypes from 'prop-types'
import max from 'lodash/max'
import map from 'lodash/map'
import get from 'lodash/get'

import { Container } from '../container'
import { Item } from '../item'

export const Bracket = ({ data }) => {
  const numberOfRounds = data.length
  const maxGamesPerRound = max(data).length
  const numberOfRows = (maxGamesPerRound * 3) - 1

  return (
    <Container columns={numberOfRounds} rows={numberOfRows}>
      {map(data, (round, index) => {
        const column = index + 1

        let firstGameOffset = 0
        const nextRound = get(data, column, [])

        if (nextRound.length >= round.length) {
          firstGameOffset = 1
        }

        return map(round, (game, index) => {
          const offset = 1 + firstGameOffset
          let row = index + offset

          if (row !== offset) {
            row += 1
          }

          row += column - 1

          return (
            <Item column={column} row={row}>
              <div>{game.id}</div>
              <div>{game.firstPlayer}</div>
              <div>{game.secondPlayer}</div>
            </Item>
          )
        })
      })}
    </Container>
  )
}

Bracket.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    firstPlayer: PropTypes.string,
    secondPlayer: PropTypes.string
  })))
}
