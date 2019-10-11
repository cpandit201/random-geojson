exports.randomizer = function (){
    return function ({min, max, requiredNmberOfDecimals}){
        return (Math.random() * ((min) - (max)) + max).toFixed(requiredNmberOfDecimals);
    }   
}