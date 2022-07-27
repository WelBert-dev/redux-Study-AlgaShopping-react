import React from 'react';
//import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { sum } from '../store/Calculator/Calculator.actions';

function Calculator() 
{
    const dispatch = useDispatch();
    const result = useSelector(state => state.calculator);

    return (
        <>
            <input id="calculatorInputA" type="text" placeholder="a" />
            <input id="calculatorInputB" type="text" placeholder="b" />

            <button onClick={()=>{
                dispatch(sum(Number(document.querySelector("#calculatorInputA").value), Number(document.querySelector("#calculatorInputB").value)));
            }}
            >Somar</button>
            <button>Subtrair</button>

            <div>
                resultado: {result}
            </div>       
        </>
    )
}

/*function mapStateToProps(state) 
{
    return {
        result: state.calculator
    }
}*/

// export default connect(mapStateToProps)(Calculator);

export default Calculator;
