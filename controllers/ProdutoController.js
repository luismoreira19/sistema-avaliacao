const { Produto } = require('../models');
require('dotenv').config();

module.exports = class ProdutoController {
  static async showAll(req, res) {
    try {
      const produtos = await Produto.findAll();
      res.status(200).json({
        data: produtos
      });
    } catch (e) {
      res.status(500).json({
        erro: e.message
      });
    }
  }

  static async show(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);
      if (produto) {
        res.status(200).json({
          data: produto
        });
      } else {
        res.status(404).send("Produto não encontrado.");
      }
    } catch (e) {
      res.status(500).json({
        erro: e.message
      });
    }
  }

  static async create(req, res) {
    try {
      const produto = await Produto.create({
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        estoque: req.body.estoque
      });
      res.status(201).send("Produto criado com sucesso!");
    } catch (e) {
      res.status(500).json({
        erro: e.message
      });
    }
  }

  static async update(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);
      if (produto) {
        await produto.update({
          nome: req.body.nome,
          descricao: req.body.descricao,
          preco: req.body.preco,
          estoque: req.body.estoque
        });
        res.status(200).send("Produto atualizado com sucesso!");
      } else {
        res.status(404).send("Produto não encontrado.");
      }
    } catch (e) {
      res.status(500).json({
        erro: e.message
      });
    }
  }

  static async delete(req, res) {
    try {
      const produto = await Produto.findByPk(req.params.id);
      if (produto) {
        await produto.destroy();
        res.status(200).send("Produto excluído com sucesso!");
      } else {
        res.status(404).send("Produto não encontrado.");
      }
    } catch (e) {
      res.status(500).json({
        erro: e.message
      });
    }
  }
};
