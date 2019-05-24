import React from 'react';
import './App.css';

class App extends React.Component {

  renderFinalPath (color) {
    return (
      <React.Fragment>
        <div className={`cell ${color}`}></div>
        <div className={`cell ${color}`}></div>
        <div className={`cell ${color}`}></div>
        <div className={`cell ${color}`}></div>
        <div className={`cell ${color}`}></div>
        <div className={`cell ${color}`}></div>
      </React.Fragment>
    )
  }

  renderPath (start, end, color) {
    let itemList = []
    for (let i = start; i <= end; ++i) {
      const circle = (i === start + 7) || (i === start + 12)? 'circle' : ''
      const col =  (i === start + 12) ? color : ''
      const number = i%68 === 0 ? 68 : i%68
      if (circle) {
        itemList.push(<div className={`cell p${i - start + 1} ${col}`}><div className={circle}>{number}</div></div>)
      } else  {
        itemList.push(<div className={`cell p${i - start + 1} ${col}`}>{number}</div>)
      }
    }
    return itemList
  }

  render () {
    return (
      <div className="Board">
        <div className='player1'><div className='circle red'/></div>
        <div className='player2'><div className='circle blue'/></div>
        <div className='player3'><div className='circle green'/></div>
        <div className='player4'><div className='circle yellow'/></div>
        <div className='box play down'>
          { this.renderFinalPath('yellow') }
          { this.renderPath(61, 75, 'yellow')}
        </div>
        <div className='box play right'>
          { this.renderFinalPath('blue') }
          { this.renderPath(10, 24, 'blue')}
        </div>
        <div className='box play top'>
          { this.renderFinalPath('red') }
          { this.renderPath(27, 41, 'red')}
        </div>
        <div className='box play left'>
          { this.renderFinalPath('green') }
          { this.renderPath(44, 58, 'green')}
        </div>
        <div className='centerBoard'></div>
      </div>
    )
  }
}

export default App;
