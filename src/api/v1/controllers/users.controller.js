const User = require('../models/users.model');
const { validationResult } = require('express-validator');

exports.getAllUsers = (req, res) => {
  User.getAll((err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        code: 500,
        status: 'INTERNAL_SERVER_ERROR',
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

exports.findById = (req, res) => {
  const userId = req.params.id;

  User.findById(userId, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        code: 500,
        status: 'INTERNAL_SERVER_ERROR',
      });
      return;
    }

    if (!result) {
      res.status(404).json({
        code: 404,
        status: 'NOT_FOUND',
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

exports.create = async (req, res) => {
  try {
    // Validate request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        code: 400,
        status: 'BAD_REQUEST',
        message: errors.array(),
      });
    }

    // Create a new user
    const { fullname, email, password } = req.body;
    const role = 1;
    const is_active = 1;

    User.create(fullname, email, password, role, is_active, (err, result) => {
      if (err) {
        res.status(400).json({
          code: 400,
          status: 'BAD_REQUEST',
          message: err,
        });
      } else {
        res.status(201).json({
          code: 201,
          status: 'DATA CREATED OK',
          data: result,
        });
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      status: 'INTERNAL_SERVER_ERROR',
    });
  }
};

exports.update = async (req, res) => {
  try {
    // validate request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        code: 400,
        status: 'BAD_REQUEST',
        message: errors.array(),
      });
    }

    // update users
    const userId = req.params.id;
    const { fullname, email, password } = req.body;

    User.update(fullname, email, password, userId, (err, result) => {
      if (err) {
        res.status(400).json({
          code: 400,
          status: 'BAD_REQUEST',
          message: err,
        });
      }

      if (!result) {
        res.status(404).json({
          code: 404,
          status: 'NOT_FOUND',
        });
        return;
      }

      res.status(200).json({
        code: 200,
        status: 'DATA UPDATED OK',
        data: result,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      status: 'INTERNAL_SERVER_ERROR',
    });
  }
};

exports.destory = async (req, res) => {
  try {
    // validate request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        code: 400,
        status: 'BAD_REQUEST',
        errors: errors.array(),
      });
    }

    // deleted data
    const userId = req.params.id;
    const is_active = 0;

    User.delete(userId, is_active, (err, result) => {
      if (err) {
        res.status(400).json({
          code: 400,
          status: 'BAD_REQUEST',
          message: err,
        });
      }

      if (!result) {
        res.status(404).json({
          code: 404,
          status: 'NOT_FOUND',
        });
        return;
      }

      res.status(200).json({
        code: 200,
        status: 'DATA DELETED OK',
        data: result,
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      code: 500,
      status: 'INTERNAL_SERVER_ERROR',
    });
  }
};
