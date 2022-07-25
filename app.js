let cheese = 0;
function getCheese() {

    document.getElementById("cheese").innerHTML = cheese;
    (cheese += 5)
    // iterate through our clickUpgrades... forin loop
    // check to see IF i have an upgrade.. quantity
    // if I have an upgrade, apply its quantity and multiplier to my cheese resource
}




const pickAxeElm = document.getElementById('axe-bought')
const roverElm = document.getElementById('rover-bought')
const tntElm = document.getElementById('tnt-bought')
const laserElm = document.getElementById('laser-bought')

const costOneElm = document.getElementById('cost-one')
const costTwoElm = document.getElementById('cost-two')
const costThreeElm = document.getElementById('cost-three')
const costFourElm = document.getElementById('cost-four')







let clickUpgrades = {
    pickaxes: {
        price: 100,
        quantity: 0,
        multiplier: 1
    },
    rovers: {
        price: 200,
        quantity: 0,
        multiplier: 20
    },
    tnt: {
        price: 300,
        quantity: 0,
        multiplier: 5
    }

}

let autoUpgrades = {
    laser: {
        price: 600,
        quantity: 0,
        multiplier: 2
    }
}



function drawPickaxePrice() {
    costOneElm.innerText = clickUpgrades.pickaxes.price
}

function buyPickaxe() {
    // let clickUpgrade = clickUpgrades[key]
    let pickaxe = clickUpgrades.pickaxes

    if (cheese >= pickaxe.price) {
        cheese -= pickaxe.price;
        clickUpgrades.pickaxes.quantity += 1;
        // pickaxe.price OR clickUpgrades.pickaxes.price
        // this line increases the price after every time we buy one...
        pickaxe.price = pickaxe.price * 2
        console.log('new price', pickaxe.price)
        document.getElementById("axe-bought").innerHTML = clickUpgrades.pickaxes.quantity;
        drawPickaxePrice()
    }

}
buyPickaxe()

function drawRoverPrice() {
    costTwoElm.innerText = clickUpgrades.rovers.price
}


function buyRover() {
    // let clickUpgrade = clickUpgrades[key]
    let rover = clickUpgrades.rovers
    if (cheese >= rover.price) {
        cheese -= rover.price;
        clickUpgrades.rovers.quantity += 1;
        rover.price = rover.price * 2
        document.getElementById("rover-bought").innerHTML = clickUpgrades.rovers.quantity;
        drawRoverPrice()
    }
}
buyRover()

function buyTnt() {
    // let clickUpgrade = clickUpgrades[key]
    if (cheese >= clickUpgrades.tnt.price) {
        cheese -= clickUpgrades.tnt.price;
        clickUpgrades.tnt.quantity += 1;
        document.getElementById("tnt-bought").innerHTML = clickUpgrades.tnt.quantity;
    }
}
buyTnt()

function buyLaser() {
    // let clickUpgrade = clickUpgrades[key]
    if (cheese >= autoUpgrades.laser.price) {
        cheese -= autoUpgrades.laser.price;
        autoUpgrades.laser.quantity += 1;
        document.getElementById("laser-bought").innerHTML = autoUpgrades.laser.quantity;
    }

}
buyLaser()

function collectAutoUpgrades() {
    // check to see if I have an auto upgrade
    // if I have one... add the quantity AND the multiplier to my cheese resource
    if (autoUpgrades.laser.quantity > 0) {
        cheese += autoUpgrades.laser.quantity * autoUpgrades.laser.multiplier
        document.getElementById("cheese").innerHTML = cheese;
    }
}

setInterval(collectAutoUpgrades, 3000)


// function drawUpgrades(){
//     let template = ''
// for (const key in clickUpgrades) {
//    let upgrade = clickUpgrades[key]
//    template = ` <button class="btn btn-primary" onclick="buyPickaxe()">(Pickaxe) <span id="cost-one">0</span> </button>
//    <p>Number purchased
//        <span id="axe-bought">0</span>
//    </p>`
// }
// }

drawPickaxePrice()