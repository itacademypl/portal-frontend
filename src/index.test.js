
it("Simple test", () => {
  // given
  const array = [1, 2, 3]

  // when
  const result = array.filter((it) => it === 2)

  // then
  expect(result).toHaveLength(1)
  expect(result[0]).toBe(2)
})
