const { Comment } = require("../models");

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
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  // await Comment.destroy({
  //   where: {
  //     articleId: req.params.id,
  //   },
  // });

  return res.redirect("/admin");
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
