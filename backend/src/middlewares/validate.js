// Basit input-validation iskeleti. Büyürse Zod/Joi ile değiştirin.
module.exports = function validate(schemaFn) {
  return (req, res, next) => {
    try {
      if (schemaFn) schemaFn(req);
      next();
    } catch (e) {
      e.status = 400;
      next(e);
    }
  };
};
