import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

const user = new User()
// const company = new Company()
const customMap = new CustomMap('map')
customMap.addUserMaker(user)
// console.log(customMap)
// console.log(user)
// console.log(company)
