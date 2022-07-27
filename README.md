# reduxStudyAlgaShopping-react


1. Create the store folder in /src (./frontend/src/store)
    1. Create the src/store/Calculator folder
        1. Create the action: src/store/Calculator/Calculator.actions.js
            1. Action: Função que retorna uma ação
            2. Parametros: export function sum(a, b)
            3. retorno: objeto {type: 'SUM', payload: [a, b]}    
        2. Create the reducer: src/Calculator/Calculator.reducer.js (Entity.type.extension)
            1. Reducer: Recebe os dados da ação e retorna um novo estado ao store
            2. Parametros: export function (state = 0, action)
                1. state: estado atual
                2. action: objeto retornado {type, payload}
    2. Create the src/store/store.js 
        1. import { createStore, combineReducers } from 'redux'
        2. import calculatorReducer from './Calculator/Calculator.reducer.js'
        3. rootReducer = combineReducers({calculator: calculatorReducer, ...})
