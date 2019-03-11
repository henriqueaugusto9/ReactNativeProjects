const INITIAL_STATE = {
    
    tableData: [
        ['Períodos','1º', '2º', '3º', '4º', 'Total'],
        ['SESI FRA','20', '18', '22', '25', '85'],
        ['FLA','19', '17', '24', '19', '79'],
    ]
    
} 
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
    
    case 'show':
    

    default:
        return state
    } 
}