import React, { Component } from 'react';

import MemosItem from './MemosItem'

class MemosList extends Component {
    render() { 

        let arr = this.props.allMemos.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        return (  
            <div className='memos-list list'>
                {
                    arr.map((memo, index) => {
                        return <MemosItem key={index} memo={memo} index={index} />
                    })
                }
            </div>
        )
    }
}
 
export default MemosList;