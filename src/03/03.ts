import {student, StudentType} from "../02/02";
import {GovernmentBuildingsType, HousesType} from "../02/02_02";

export const sum =(a: number, b: number) =>{
    return a+b;
}

export const addSkill = (student: StudentType, skill: string)=>{
    student.technologies.push({id: new Date().getTime(),
    title: skill})
}

export function makeStudentActive(s: StudentType){
    s.isActive=true;

}

export function changeStudentLive(s: StudentType, cityName: string){
    s.address.city.title===cityName;
}
export const changeBudget=(building: GovernmentBuildingsType, budget: number)=>{
   building.budget+=budget;
}

export const repairHouse= (housesType: HousesType)=>{
    housesType.repaired=true;
}

export const toFireStaff= (Building: GovernmentBuildingsType, staffToFire: number)=>{
    Building.staffCount-=staffToFire;
}

export const toHireStaff= (building: GovernmentBuildingsType, staffToHire: number)=>{
    building.staffCount+=staffToHire;
}