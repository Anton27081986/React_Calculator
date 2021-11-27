import React, {useState} from 'react'
import './App.css'

const App = () => {

	const [calc, setCalc] = useState("");

	const click = (e) => {
		setCalc(calc.concat(e.target.name));
	}

	const reset = () => {
		setCalc("");
	}

	const deleteItem = () => {
		setCalc(calc.slice(0, -1));
	}

	const equal = () => {
		try {
			setCalc(eval(calc).toString());
		}catch(err) {
			setCalc('Erorr')
		}
		
	}

	return (
		<>
			<div className="container">
        		<div className="item input">
					<form name="form">
						<input className="input_text" value={calc} readOnly/>
					</form>
        		</div>
				<button onClick={reset} className="item clean">C</button>
				<button onClick={deleteItem} className="item back">&larr;</button>
				<button name="+" onClick={click} className="item">+</button>
				<button name="-" onClick={click} className="item">-</button>
				<button name="*" onClick={click} className="item">&times;</button>
				<button name="/" onClick={click} className="item">&divide;</button>
				<button name="7" onClick={click} className="item number">7</button>
				<button name="8" onClick={click} className="item number">8</button>
				<button name="9" onClick={click} className="item number">9</button>
				<button name="(" onClick={click} className="item">(</button>
				<button name="4" onClick={click} className="item number">4</button>
				<button name="5" onClick={click} className="item number">5</button>
				<button name="6" onClick={click} className="item number">6</button>
				<button name=")" onClick={click} className="item">)</button>
				<button name="1" onClick={click} className="item number">1</button>
				<button name="2" onClick={click} className="item number">2</button>
				<button name="3" onClick={click} className="item number">3</button>
				<button name="=" onClick={equal} className="item equal">=</button>
				<button name="0" onClick={click} className="item zero">0</button>
				<button name="." onClick={click} className="item">.</button>
   			</div> 
		</>
	)
}

export default App
