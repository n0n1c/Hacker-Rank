    //meal cost
    var mealCost = _input[0];
    //tip percentage
    var tipPercent = _input[1];
    //tax percentage
    var taxPercent = _input[2];
    //convert tax and tip
    var tip = (mealCost * (tipPercent/100)).toFixed(2);
    var tax = (mealCost * (taxPercent/100)).toFixed(2);
    //add all three values to obtain total cost
    var totalCost = Math.round(Number(mealCost) + Number(tip) + Number(tax));
    console.log("The total meal cost is " + totalCost + " dollars.")