import {CityType} from "../02/02_02";
import {changeBudget, repairHouse, toFireStaff, toHireStaff} from "./03";


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            buildedAt: 2012, repaired: false, address: {
                number: 100, street: {
                    title: "White street"
                }
            }
        },
            {
                buildedAt: 2008, repaired: false, address: {
                    number: 100, street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildedAt: 2020, repaired: false, address: {
                    number: 200, street: {
                        title: "Hogwarts street"
                    }
                }
            }
        ],
        governmentBuildings: [{
            type: "HOSPITAL", budget: 200000,
            staffCount: 200, address: {street: {title: "Central Str"}}
        },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {street: {title: "Souths park str"}}
            }],
        citizensNumber: 1000000
    }
})

test('Budget should be changed for HOSPITAL', () => {
    // expect(city.governmentBuildings[0].budget).toBe(200000)
    changeBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for FIRE-STATION', () => {
    changeBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

// test('Houses should be destroyed', ()=>{
//     demolishHouseOnTheStreet(city, 'Happy street');
//     expect(city.houses.length).toBe(1);
//     expect(city.houses[0].id).toBe(1);
//
// })

test('House should be repaired', () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy()
})

test('staff should be increased', () => {
    toFireStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be hire', () => {
    toHireStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(220)
})