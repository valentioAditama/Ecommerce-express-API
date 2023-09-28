const { validationResult } = require('express-validator');
const Cart = require('../models/cart.model');

exports.getAll = (req, res) => {
  Cart.getAll((err, result) => {
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
  Cart.getById(id, (err, result) => {
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

    // response
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

    const { products_id } = req.body;
    const is_active = 1;

    Cart.create(products_id, is_active, (err, result) => {
      if (err) throw err;
      res.status(201).json({
        code: 201,
        status: 'CREATED',
        data: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'INTERNAL SERVER ERROR',
    });
  }
};

exports.update = (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        code: 400,
        status: 'BAD REQUEST',
        errors: errors.array(),
      });
    }

    const { products_id } = req.body;
    const id = req.params.id;

    Cart.update(id, products_id, (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        res.status(404).json({
          code: 404,
          status: 'NOT FOUND',
        });
      }
      res.status(200).json({
        code: 200,
        status: 'OK',
        data: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'INTERNAL SERVER ERROR',
    });
  }
};

exports.destory = (req, res) => {
  try {
    const id = req.params.id;

    Cart.delete(id, (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        res.status(404).json({
          code: 404,
          status: 'NOT FOUND',
        });
      }
      res.status(200).json({
        code: 200,
        status: 'OK',
        data: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: 'INTERNAL SERVER ERROR',
    });
  }
};
