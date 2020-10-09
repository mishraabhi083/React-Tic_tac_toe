import React from 'react'
import Row from './row'
// import Block from './block'
export default class Board extends React.Component {
    render() {
        return (
            <div className="board container justify-content-center">
                <Row />
                <Row />
                <Row />
            </div>
        )
    }
}