const { validationResult } = require('express-validator');
const Product_photos = require('../models/product_photos.model');

exports.getAll = (req, res) => {
  Product_photos.getAll((err, result) => {
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

exports.getById = (req, res) => {
  const id = req.params.id;
  Product_photos.getById(id, (err, result) => {
    if (err) {
      res.status(500).json({
        code: 500,
        status: 'INTERNAL SERVER ERROR',
      });
      return;
    }

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

    const { product_id, path } = req.body;
    Product_photos.create({ product_id, path }, (err, result) => {
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
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      status: 'INTERNAL SERVER ERROR',
    });
  }
};

exports.update = (req, res) => {
  const id = req.params.id;
  const { product_id, path } = req.body;
  Product_photos.update(id, product_id, path, (err, result) => {
    if (err) {
      res.status(500).json({
        code: 500,
        status: 'INTERNAL SERVER ERROR',
      });
      return;
    }

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
};

exports.destory = (req, res) => {
  const id = req.params.id;
  Product_photos.delete(id, (err, result) => {
    if (err) {
      res.status(500).json({
        code: 500,
        status: 'INTERNAL SERVER ERROR',
      });
      return;
    }

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
};
