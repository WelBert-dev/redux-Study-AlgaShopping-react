# reduxStudyAlgaShopping-react


1. Create the store folder in ./frontend/src (./frontend/src/store):
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
        4. const store = createStore(rootReducer)
            1. Ou seja, o store é a execulção de todos os reducers criados (poriam ser calculator, product...)

2. Injection the store in App:
    1. In ./frontend/src/index.js 
        1. import store from './store/store.js'
        2. import { Provider } from 'react-redux'
        3. using Provider from encapsulate (Wrap) the main Component from aplication (&gtAPP /&lt or &gtHomeView /&lt, ....)
            1. &gtProvider store={store}&lt &gtRootElement /&lt &gt/Provider&lt
        4. App configurado, agora vamos devemos 'disparar' as ações para ver o store modificar dinamicamente.

3. Utilizando o state atual no component:
    1. create the ./frontend/src/components/Calculator.jsx and inject on ./frontend/src/components/App
        1. Using the store in this component (Calculator.jsx) (jeito antigo) via props
            1. import { connect } from 'react-redux'
            2. Mapeia o estado em uma props: function mapStateToProps(state) { return {result: state.calculator}}
                1. export default connect(mapStateToProps)(Calculator) 
            3. using state in component
                1. function Calculator({ result })
                2. and inject/using the prop in this component (Calculator)
        2. Using the store in this component (Calculator.jsx) (jeito novo) via hook useSelector
            1. import { useSelector } from 'react-redux'
            2. antes de retornar o HTML do component fazer:
                const result = useSelector(function(state){ return state.calculator})

        

