import asyncHandler from "../utils/asyncHandler.js";

const buildCrudController = (Model, sort = { order: 1, createdAt: -1 }) => {
  const getAll = asyncHandler(async (_req, res) => {
    const items = await Model.find().sort(sort);
    res.json(items);
  });

  const createOne = asyncHandler(async (req, res) => {
    const item = await Model.create(req.body);
    res.status(201).json(item);
  });

  const updateOne = asyncHandler(async (req, res) => {
    const item = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    return res.json(item);
  });

  const deleteOne = asyncHandler(async (req, res) => {
    const item = await Model.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    return res.json({ message: "Deleted" });
  });

  return { getAll, createOne, updateOne, deleteOne };
};

export default buildCrudController;
