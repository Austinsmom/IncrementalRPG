var meta = {
    town: "",
    mayor: "",
    maxPopulation: 0,
    population: 0,
}

var resource = {
    wood: {
        name: "Wood",
        description: "Brown stuff that grows on trees.",
        worker: "lumberjack",
        total: 0,
        clickIncrement: 1,
        max: 100,
        storage: {
            total: 0,
            max: 100,
            cost: {
                wood: 50,
                stone: 50,
            },
            costIncrease: 1.1
        }
    },
    stone: {
        name: "Stone",
        description: "Hard stuff.",
        worker: "miner",
        total: 0,
        clickIncrement: 1,
        max: 100,
        storage: {
            total: 0,
            max: 100,
            cost: {
                wood: 50,
                stone: 50,
            },
            costIncrease: 1.1
        }
    },
    iron: {
        name: "Iron",
        description: "Even harder stuff. Bit rusty.",
        worker: "scrapper",
        total: 0,
        clickIncrement: 1,
        max: 100,
        storage: {
            total: 0,
            max: 100,
            cost: {
                wood: 100,
                stone: 100,
            },
            costIncrease: 1.1
        }
    },
    food: {
        name: "Food",
        description: "Goes into mouths and is the leading cause of obesity.",
        worker: "hunter",
        total: 0,
        clickIncrement: 1,
        max: 100,
        storage: {
            total: 0,
            max: 100,
            cost: {
                wood: 50,
                stone: 50,
            },
            costIncrease: 1.1
        }
    }
}

var workers = {
    lumberjack: {
        name: "Lumberjack",
        description: "A person who likes to chop wood.",
        resource: "wood",
        total: 0,
        autoIncrement: 1,
        cost: {
            food: 10
        },
        costIncrease: 1.1
    },
    miner: {
        name: "Miner",
        description: "Not a young person.",
        resource: "stone",
        total: 0,
        autoIncrement: 1,
        cost: {
            food: 10
        },
        costIncrease: 1.1
    },
    scrapper: {
        name: "Scrapper",
        description: "Not someone who gets into lots of fights.",
        resource: "iron",
        total: 0,
        autoIncrement: 1,
        cost: {
            food: 10
        },
        costIncrease: 1.1
    },
    hunter: {
        name: "Hunter",
        description: "The opposite to a gatherer.",
        resource: "food",
        total: 0,
        autoIncrement: 1,
        cost: {
            food: 10
        },
        costIncrease: 1.1
    }
}

var buildings = {
    tent: {
        name: "Tent",
        description: "Just like a house but way smaller and made out of fabric.",
        total: 0,
        residents: 1,
        cost: {
            wood: 30
        },
        costIncrease: 1.1
    },
    house: {
        name: "House",
        description: "Just like a tent but way bigger and not made out of fabric.",
        total: 0,
        residents: 4,
        cost: {
            wood: 75,
            stone: 25,
            iron: 10
        },
        costIncrease: 1.1
    },
    hostel: {
        name: "Hostel",
        description: "A bit like a house but not as nice and not as private.",
        total: 0,
        residents: 10,
        cost: {
            wood: 200,
            stone: 215
        },
        costIncrease: 1.1,
        research: {
            locked: true,
            unlockedPercent: 0,
            unlockTime: 60,
            isUnlocking: false,
            cost: {
                wood: 400,
                stone: 150
            }
        }
    }
}
