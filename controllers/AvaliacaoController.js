'use strict';

const { Avaliacao } = require('../models');

module.exports = class AvaliacaoController {
  // Método para listar todas as avaliações
  static async showAll(req, res) {
    try {
      const avaliacoes = await Avaliacao.findAll();
      res.status(200).json({ data: avaliacoes });
    } catch (e) {
      res.status(500).json({ erro: e.message });
    }
  }

  // Método para mostrar uma avaliação específica pelo ID
  static async show(req, res) {
    try {
      const avaliacao = await Avaliacao.findByPk(req.params.id);
      if (avaliacao) {
        res.status(200).json({ data: avaliacao });
      } else {
        res.status(404).send("Avaliação não encontrada.");
      }
    } catch (e) {
      res.status(500).json({ erro: e.message });
    }
  }

  // Método para criar uma nova avaliação
  static async create(req, res) {
    try {
      const avaliacao = await Avaliacao.create({
        idProduto: req.body.idProduto,
        idUsuario: req.body.idUsuario,
        classificacao: req.body.classificacao,
        comentario: req.body.comentario
      });
      res.status(201).send("Avaliação criada com sucesso!");
    } catch (e) {
      res.status(500).json({ erro: e.message });
    }
  }

  // Método para atualizar uma avaliação existente pelo ID
  static async update(req, res) {
    try {
      const avaliacao = await Avaliacao.findByPk(req.params.id);
      if (avaliacao) {
        await avaliacao.update({
          idProduto: req.body.idProduto,
          idUsuario: req.body.idUsuario,
          classificacao: req.body.classificacao,
          comentario: req.body.comentario
        });
        res.status(200).send("Avaliação atualizada com sucesso!");
      } else {
        res.status(404).send("Avaliação não encontrada.");
      }
    } catch (e) {
      res.status(500).json({ erro: e.message });
    }
  }

  // Método para excluir uma avaliação existente pelo ID
  static async delete(req, res) {
    try {
      const avaliacao = await Avaliacao.findByPk(req.params.id);
      if (avaliacao) {
        await avaliacao.destroy();
        res.status(200).send("Avaliação excluída com sucesso!");
      } else {
        res.status(404).send("Avaliação não encontrada.");
      }
    } catch (e) {
      res.status(500).json({ erro: e.message });
    }
  }
};
