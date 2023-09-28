const { validationResult } = require('express-validator');
const Product = require('../models/products.model');

exports.getAll = (req, res) => {
  Product.getAll((err, result) => {
    if (err) {
      res.status(500).json({
        code: 500,
        status: 'INTERNAL SERVER ERROR',
      });
      return;
    }

    const page = parseInt(req.query.page);
    const pageSize = parseInt(req.query.pageSize);

    // Calculate the offset to skip records
    const offset = (page - 1) * pageSize;

    // Get a slice of data based on the pagination parameters
    const paginatedData = result.slice(offset, offset + pageSize);

    // response
    res.status(200).json({
      code: 200,
      status: 'OK',
      data: paginatedData,
      page: {
        size: pageSize,
        total: result.length,
        totalPages: Math.ceil(result.length / pageSize),
        current: page,
      },
    });
  });
};

exports.findById = (req, res) => {
  const id = req.params.id;

  Product.findById(id, (err, result) => {
    if (err) {
      res.status(500).json({
        code: 500,
        status: 'INTERNAL SERVER ERROR',
      });
      return;
    }

    if (!result) {
      res.status(404).json({
        code: 404,
        status: 'NOT FOUND',
      });
      return;
    }

    res.status(200).json({
      code: 200,
      status: 'OK',
      data: result,
    });
  });
};

exports.create = (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        code: 400,
        status: 'BAD REQUEST',
        errors: errors.array(),
      });
    }

    const { user_id, title, price, product_detail, is_active } = req.body;

    Product.create(
      user_id,
      title,
      price,
      product_detail,
      is_active,
      (err, result) => {
        if (err) {
          res.status(500).json({
            code: 500,
            status: 'INTERNAL SERVER ERROR',
          });
          return;
        }

        res.status(201).json({
          code: 201,
          status: 'CREATED',
          data: result,
        });
      },
    );
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: 'INTERNAL SERVER ERROR',
    });
  }
};

exports.update = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      code: 400,
      status: 'BAD REQUEST',
      errors: errors.array(),
    });
  }

  const id = req.params.id;
  const { title, price, product_detail } = req.body;

  Product.update(id, title, price, product_detail, (err, result) => {
    if (err) {
      res.status(500).json({
        code: 500,
        status: 'INTERNAL SERVER ERROR',
      });
      return;
    }

    if (!result) {
      res.status(404).json({
        code: 404,
        status: 'NOT FOUND',
      });
      return;
    }

    res.status(200).json({
      code: 200,
      status: 'OK',
      data: result,
    });
  });
};

exports.destory = (req, res) => {
  const id = req.params.id;

  Product.findByIdAndDelete(id, (err, result) => {
    if (err) {
      res.status(500).json({
        code: 500,
        status: 'INTERNAL SERVER ERROR',
      });
      return;
    }

    if (!result) {
      res.status(404).json({
        code: 404,
        status: 'NOT FOUND',
      });
      return;
    }

    res.status(200).json({
      code: 200,
      status: 'OK',
      data: result,
    });
  });
};
