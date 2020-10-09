import React from 'react'
import './block.css'
export default class Block extends React.Component {
    constructor(props){
        super(props);
        Block.lastMark='O'
        Block.lastColor='#00f'
        this.state={
            mark:null,
            color:'#f00',
            shadow:null,
        }
    }
    handleChange = ()=>{
        if(this.state.mark===null){
            var change = {
                '✘':'O',
                'O':'✘',
                '#f00':'#00f',
                '#00f':'#f00'
            }
            this.setState({
                mark:change[Block.lastMark],
                color:change[Block.lastColor],
                shadow:`inset 0 0 10px ${change[Block.lastColor]}`
            })
            Block.lastMark=change[Block.lastMark]
            Block.lastColor=change[Block.lastColor]
        }
    }
    render() {
        return (
            <div className="">
                <input type="button" value={this.state.mark} onClick={this.handleChange} 
                className='block' style={{color:this.state.color,boxShadow:this.state.shadow}}
                />
            </div>
        )
    }
}
