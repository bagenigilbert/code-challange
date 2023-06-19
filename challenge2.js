function checkSpeed(speed) {
    const limit = 70
    const points = 0
   if(speed <= limit) {
    return 'okay'
   }else {
    const excess =speed -limit
    const points = excess
    if("Points:", points){
return "LICENCE CANCELED"
   }else {
    return "points" + points
   }
}
}
