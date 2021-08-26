let ID = 0

export default function uniqueID() {
  const getID = () => ID++
  return {
    getID
  }
}