const { Comment, Author } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  await Comment.create(
    {
      userName: req.body.userName,
      userComment: req.body.userComment,
      articleId: req.params.id,
    },
    () => {
      console.log("Comment created");
    },
  );
  return res.redirect(`/articulos/${req.params.id}`);
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const comment = await Comment.findByPk(req.params.id);

  res.render("editComment", { comment });
}

// Update the specified resource in storage.
async function update(req, res) {
  const comment = req.body;
  const commentId = req.params.id;
  await Comment.update(
    {
      userName: comment.name,
      userComment: comment.content,
    },
    {
      where: { id: commentId },
    },
  );
  res.redirect("/");
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  await Comment.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.redirect("back");
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
