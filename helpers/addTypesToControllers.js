const addComment = (j, p) => {
  const commentValue = "* @param {HttpContextContract} ctx ";
  const { comments } = p.value;
  const newComment = j.commentBlock(commentValue, true);
  const updatedComments = comments
    ? [newComment, ...comments]
    : [newComment];
  p.get("comments").replace(updatedComments);
};

module.exports = function (file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root
    .find(j.ClassDeclaration)
    // .filter(({ node }) => node.id.name.endsWith("Controller"))
    .find(j.MethodDefinition)
    .forEach((p) => {
      addComment(j, p);
    });

  return root.toSource({ quote: "single" });
};

// jscodeshift -t ./addTypesToControllers.js ../../../market-scraper/app/Controllers/Http/**/*Controller.js