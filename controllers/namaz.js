import Namaz from "../models/Namaz.js";

// Add Namaz
export const createNamaz = async (req, res, next) => {
  const newNamaz = new Namaz(req.body);

  try {
    const namazs = await Namaz.find({
      email: newNamaz.email,
      date: newNamaz.date,
    });

    if (namazs.length !== 0) {
      res.status(200).json(namazs);
    } else {
      const savedNamaz = await newNamaz.save();
      const saveNamaz = [savedNamaz];
      res.status(200).json(saveNamaz);
    }
  } catch (err) {
    next(err);
  }
};

// update Namaz
export const updateNamaz = async (req, res, next) => {
  try {
    const updatedNamaz = await Namaz.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedNamaz);
  } catch (err) {
    next(err);
  }
};

// Namazs
export const getNamazs = async (req, res, next) => {
  const { email, ...others } = req.query;
  try {
    const namazs = await Namaz.find({
      email,
      ...others,
    });
    res.status(200).json(namazs);
  } catch (err) {
    next(err);
  }
};
