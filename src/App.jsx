import './App.css'
import {useState} from 'react'
import Button from './components/Button';

const buttonsClase = "btn btn-primary w-100 p-5";
const buttonsClases = "btn btn-primary w-100 p-3";

function App() {
  const [operator, setOperator] = useState('');
  const [number1, setNumber1] = useState('');
  const [clearScreen, setClearScreen] = useState(false);
  const [screen, setScreen] = useState('0');

  const handleButtonClick = (e) => {
    const {value} = e.target;
    if (value === '.'){
      if (screen.includes('.')) return;
    }
    if (value === 'C'){
      setScreen('0')
      return;
    }

    //---------------------------------------------------
    //console.log({number1});
    if (clearScreen) {
      console.log('Cambia screen')
      setScreen(value);
      setClearScreen(false);
      return;
    }

    //console.log('click')
    if (screen === '0' && value !== '.'){
    setScreen(value);
    return;
    }
      setScreen(`${screen}${value}`)
    
  }

  const handleDelButtonClick = ()=> {
    if(screen.length === 1){
      setScreen('0');
      return;
    }
    setScreen(screen.slice(0,-1));
    
  }

  const handleOperationButtonClick = (e) => {
    setOperator(e.target.value);
    setNumber1(screen);
    setClearScreen(true);
  }

  const handleEqualButtonClick = () => {
    const a = +number1;
    const b = +screen;
    switch (operator) {
      case '+':
      setScreen ((a + b).toString());
        break;
      case '-':
          setScreen ((a - b).toString());
        break;
      case '*':
          setScreen ((a * b).toString());
        break;
      case '/':
          setScreen ((a / b).toString());
        break;

      default:
        break;
    }
  }

  const buttonsInfo = [
    [
      {
        classes: buttonsClases,
        value: 'C',
        handleClick: handleButtonClick,
        style: {},
        rows: 1
      },

      {
        classes: buttonsClases,
        value: '/',
        handleClick: handleOperationButtonClick,
        style: {},
        rows: 1       
      },

      {
        classes: buttonsClases,
        value: '*',
        handleClick: handleOperationButtonClick,
        style: {},
        rows: 1       
      },

      {
        classes: buttonsClases,
        value: '-',
        handleClick: handleOperationButtonClick,
        style: {},
        rows: 1       
      }
    ],

  [
    {
      classes: buttonsClases,
      value: '7',
      handleClick: handleButtonClick,
      style: {},
      rows: 1
    },

    {
      classes: buttonsClases,
      value: '8',
      handleClick: handleButtonClick,
      style: {},
      rows: 1       
    },

    {
      classes: buttonsClases,
      value: '9',
      handleClick: handleButtonClick,
      style: {},
      rows: 1       
    },

    {
      classes: buttonsClases,
      value: '+',
      handleClick: handleOperationButtonClick,
      style: {},
      rows: 2       
    }
  ],

  [
    {
      classes: buttonsClases,
      value: '4',
      handleClick: handleDelButtonClick,
      style: {},
      rows: 1
    },

    {
      classes: buttonsClases,
      value: '5',
      handleClick: handleButtonClick,
      style: {},
      rows: 1       
    },

    {
      classes: buttonsClases,
      value: '6',
      handleClick: handleButtonClick,
      style: {},
      rows: 1       
    }
  ],

  [
    {
      classes: buttonsClases,
      value: '1',
      handleClick: handleDelButtonClick,
      style: {},
      rows: 1
    },

    {
      classes: buttonsClases,
      value: '2',
      handleClick: handleButtonClick,
      style: {},
      rows: 1       
    },

    {
      classes: buttonsClases,
      value: '3',
      handleClick: handleButtonClick,
      style: {},
      rows: 1       
    },

    {
      classes: buttonsClases,
      value: '=',
      handleClick: handleEqualButtonClick,
      style: {height: "80px"},
      rows: 2       
    }
  ],

  [
    {
      classes: buttonsClases,
      value: 'DEL',
      handleClick: handleDelButtonClick,
      style: {},
      rows: 1
    },
    {
      classes: buttonsClases,
      value: '0',
      handleClick: handleButtonClick,
      style: {},
      rows: 1       
    },
    {
      classes: buttonsClases,
      value: '.',
      handleClick: handleOperationButtonClick,
      style: {},
      rows: 1       
    }
  ],
]

  return (
    <div className='app'>
    <h1> Calculator </h1>
    <table>
      {/*first row*/}
      
        <tr>
          <td colSpan={4} style={{border: "1px solid black",
          textAlign:"end"
        }}>

          <h2>{screen}</h2>
          </td>
        </tr>

      {
        buttonsInfo.map((row) => {
          return (
            <tr>
              {
              row.map((cell) => {
                return (
                <td rowSpan={cell.rows}>
                  <Button
                    classes={cell.classes}
                    value={cell.value}
                    handleClick={cell.handleClick}
                    style={cell.style}
                  
                  />

                </td>
                )
              })
              }
            </tr>
          )
        })
      }
    </table>
    </div>
  )
}

export default App
