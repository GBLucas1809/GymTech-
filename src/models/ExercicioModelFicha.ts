// models/ExercicioFichaModel.js
export default class ExercicioFichaModel {
    constructor({
      id_exercicio_ficha = null, // Identificador único, presente no response
      id_exercicio = null,
      id_ficha = null,
      id_equipamento = null,
      numero_repeticao = 0,
      tempo_descanso = 0,
      peso = 0
    } = {}) {
      this.id_exercicio_ficha = id_exercicio_ficha;
      this.id_exercicio = id_exercicio;
      this.id_ficha = id_ficha;
      this.id_equipamento = id_equipamento;
      this.numero_repeticao = numero_repeticao;
      this.tempo_descanso = tempo_descanso;
      this.peso = peso;
    }
  }
  