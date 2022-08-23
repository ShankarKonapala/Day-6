class Uber{
    constructor(){}
}

class Fare extends Uber{
    static chargePerKm = 10;
    constructor(distance){
        super()
        this.distance = distance;
    }
    getFare(){
        let fare = this.distance*Fare.chargePerKm;
        return fare;
    }
}
class ExtraCharges extends Fare{
    constructor(){
        super()
    }
}
class WaitingCharge extends ExtraCharges{
    static chargePerMin = 5;
    constructor(waitingTime){
        super();
        this.waitingTime = waitingTime;
    }
    getWaitingCharge(){
        console.log(this.waitingTime);
        let waitingCharge = this.waitingTime*WaitingCharge.chargePerMin;
        return waitingCharge;
    }
}
let wc1 = new WaitingCharge(33);
let fare1 = new Fare(10);
console.log(`Total ride charge: ${wc1.getWaitingCharge()+fare1.getFare()}`);
