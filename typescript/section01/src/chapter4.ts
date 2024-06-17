// 타입 별칭(Type Alias)
type User = {
  id: number
  name: string
  nickname: string
  birth: string
  bio: string
  location: string
}

const user: User = {
  id: 1,
  name: 'Marco',
  nickname: '신림동꿀주먹',
  birth: '1993.02.27',
  bio: '안녕하세요',
  location: '화곡동'
}

const user2: User = {
  id: 1,
  name: 'Marco',
  nickname: '신림동꿀주먹',
  birth: '1993.02.27',
  bio: '안녕하세요',
  location: '화곡동'
}

// 인덱스 시그니처
// 해당 규칙을 위반하지만 않으면 된다. (빈 객체도 허용됨)
type CountryCodes = {
  [key: string]: string
}
const countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk'
}

type CountryNumberCodes = {
  [key: string]: number | string
  Korea: number | string
}

const countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826
}
