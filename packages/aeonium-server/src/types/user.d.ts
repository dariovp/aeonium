
export default interface User {
  id: number,
  name: string,
  bio?: string | null,
  followers: Array<{ id: number } | null>,
  following: Array<{ id: number } | null>
}