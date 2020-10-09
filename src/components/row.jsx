import React from 'react'
import Block from './block'
export default class Row extends React.Component {
    render() {
        return (
            <div className="row" style={{ display: 'flex' }}>
                <Block />
                <Block />
                <Block />
                
            </div>
        )
    }
}
