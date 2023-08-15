import http from "@/plugins/axios.js";

export default {
  cadastrarAtividade(params) {
    return http.post("/atividade", params);
  },
};
