// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10

anyVar = 'string'
anyVar = true
anyVar = () => {}

// unknown
let unknownVar: unknown = 10

unknownVar = 'string'
unknownVar = true
unknownVar = () => {}

// unknownVar.toUpperCase() // Error 발생
if (typeof unknownVar === 'string') {
  // 타입 정제 (타입 좁히기) 과정을 거쳐야 사용 가능하다 (any와 차이)
  unknownVar.toUpperCase()
}
