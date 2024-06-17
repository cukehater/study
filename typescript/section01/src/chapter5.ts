// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  // ADMIN = 0,
  // USER = 1,
  // GUEST = 2
  ADMIN,
  USER,
  GUEST
}

const user1 = {
  name: 'Marco',
  role: Role.ADMIN // 관리자
}
const user2 = {
  name: '홍길동',
  role: Role.USER // 일반 유저
}
const user3 = {
  name: '이순신',
  role: Role.GUEST // 게스트
}

console.log(user1, user2, user3)
