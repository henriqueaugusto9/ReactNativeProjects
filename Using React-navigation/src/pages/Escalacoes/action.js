
export const alteraTime = (casa,adversario) => (dispatch) => {
    dispatch([
          handleCasa(casa),
          handleAdv(adversario)
    ])
}

export const handleCasa = (value) => {
   return {
       type: 'casa',
       payload: value
   }
} 

export const handleAdv = (value) => {
   return {
       type: 'adversario',
       payload: value
   }
}