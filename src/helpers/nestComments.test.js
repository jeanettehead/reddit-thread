import nestComments from "./nestComments"

test("when all the comments are siblings", () => {
    const nested = nestComments([{id: 1, depth: 0}, {id: 2, depth: 0}, {id: 3, depth: 0}])

    expect(nested.map((n) => n.id)).toEqual([1,2,3])
})


test("when the comments are nested", () => {
    const nested = nestComments([
        { id: 1, depth: 0 }, { id: 2, depth: 1 }, { id: 3, depth: 1 }, { id: 4, depth: 2 },
        { id: 5, depth: 0 }, { id: 6, depth: 1 }, { id: 7, depth: 2 }, { id: 8, depth: 3 }, { id: 9, depth: 1 }
    ])

    expect(nested).toEqual([
        { id: 1, depth: 0, comments: [{ id: 2, depth: 1, comments: []}, { id: 3, depth: 1, comments: [ { id: 4, depth: 2, comments: [] }]}]},
        { id: 5, depth: 0, comments: [{ id: 6, depth: 1, comments: [ {id: 7, depth: 2, comments: [{ id: 8, depth: 3, comments: [] }]}]}, { id: 9, depth: 1, comments: [] }]}
    ])
})