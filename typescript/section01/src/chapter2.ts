// 배열
const numArr: number[] = [1, 2, 3]
const strArr: string[] = ['hello', 'I`m', 'Marco']
const boolArr: Array<boolean> = [true, false]

// 배열에 들어가는 요소들의 타입이 다양할 경우
const multiArr: (string | number)[] = [1, '1']

// 다차원 배열의 타입을 정의하는 방법
const doubleArr: (number | string)[][] = [
  [1, 2, 3],
  ['1', '2', '3']
]

// 튜플
// 길이와 타입이 고정된 배열
// 결국 그냥 배열이기 때문에 push, pop 메서드로 추가 삭제가 가능하므로 주의해서 사용해야 한다.
const tuple1: [number, number] = [1, 2]
const tuple2: [number, string, boolean] = [1, '2', true]

// 튜플 사용 예제
const users: [string, number][] = [
  ['a', 1],
  ['b', 1],
  ['c', 1]
  // [1, 'a'] // 에러 발생
]
