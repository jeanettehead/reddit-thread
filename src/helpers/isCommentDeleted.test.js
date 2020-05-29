import isCommentDeleted from "./isCommentDeleted";

test("comment is deleted if author and body are [deleted]", () => {
    expect(isCommentDeleted({author: "[deleted]", body: "[deleted]"})).toBe(true);
});

test("comment is not deleted if only author is [deleted]", () => {
    expect(isCommentDeleted({author: "[deleted]", body: "the"})).toBe(false);
});

test("comment is deleted if body is [deleted]", () => {
    expect(isCommentDeleted({author: "buffy", body: "[deleted]"})).toBe(false);
});