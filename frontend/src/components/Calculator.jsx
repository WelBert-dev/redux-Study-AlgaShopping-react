import React from 'react';
//import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

function Calculator({ result }) 
{
    const result = useSelector(state => state.calculator);

    return (
        <>
            <input type="text" placeholder="a" />
            <input type="text" placeholder="b" />

            <button onClick={()=>{}}
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
