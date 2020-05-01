import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boardState: [
        [ // column
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [ // column
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [ // column
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [ // column
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [ // column
          0,
          0,
          0,
          0,
          0,
          0
        ]
      ]
    }
  }


  render() {
    return (
      this.state.boardState.map((col, colIndex) => {
        return (
          <div className='column' style={{display: "inline-block"}} key={colIndex.toString()} id={colIndex.toString()}>
            {
              col.map((row, rowIndex) => {
                return (
                  <div className='box' key={rowIndex.toString() + colIndex.toString()} id={rowIndex.toString() + colIndex.toString()}>
                    {row}
                  </div>
                )
              })
            }
          </div>
        )
      })
    );
  }
}

export default App;