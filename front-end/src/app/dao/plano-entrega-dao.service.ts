import { Injectable, Injector } from '@angular/core';
import { PlanoEntrega } from '../models/plano-entrega.model';
import { DaoBaseService } from './dao-base.service';
import { PlanoEntregaEntrega } from '../models/plano-entrega-entrega.model';
import { PlanoTrabalho } from '../models/plano-trabalho.model';

@Injectable({
  providedIn: 'root'
})
export class PlanoEntregaDaoService extends DaoBaseService<PlanoEntrega> {

  constructor(protected injector: Injector) {
    super("PlanoEntrega", injector);
    this.inputSearchConfig.searchFields = ["numero", "nome"];
  }

  public arquivar(planoEntrega: PlanoEntrega): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/arquivar', { id: planoEntrega.id, arquivar: planoEntrega.arquivar }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public avaliar(planoEntrega: PlanoEntrega): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/avaliar', { id: planoEntrega.id, arquivar: planoEntrega.arquivar  }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public cancelarAvaliacao(planoEntrega: PlanoEntrega, justificativa: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/cancelar-avaliacao', { id: planoEntrega.id, justificativa: justificativa }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public cancelarConclusao(planoEntrega: PlanoEntrega, justificativa: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/cancelar-conclusao', { id: planoEntrega.id, justificativa: justificativa }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public cancelarHomologacao(planoEntrega: PlanoEntrega, justificativa: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/cancelar-homologacao', { id: planoEntrega.id, justificativa: justificativa }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public cancelarPlano(planoEntrega: PlanoEntrega, justificativa: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/cancelar-plano', { id: planoEntrega.id, justificativa: justificativa, arquivar: planoEntrega.arquivar }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public concluir(planoEntrega: PlanoEntrega, justificativa: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/concluir', { id: planoEntrega.id, justificativa: justificativa }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public homologar(planoEntrega: PlanoEntrega, justificativa: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/homologar', { id: planoEntrega.id, justificativa: justificativa }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public liberarHomologacao(planoEntrega: PlanoEntrega, justificativa: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/liberar-homologacao', { id: planoEntrega.id, justificativa: justificativa }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public reativar(planoEntrega: PlanoEntrega, justificativa: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/reativar', { id: planoEntrega.id, justificativa: justificativa }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public retirarHomologacao(planoEntrega: PlanoEntrega, justificativa: string | null): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/retirar-homologacao', { id: planoEntrega.id, justificativa: justificativa }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public suspender(planoEntrega: PlanoEntrega, justificativa: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/suspender', { id: planoEntrega.id, justificativa: justificativa }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

  public planosImpactadosPorAlteracaoEntrega(planoEntregaEntrega: PlanoEntregaEntrega): Promise<PlanoTrabalho[]> {
    return new Promise<PlanoTrabalho[]>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/planos-impactados-por-alteracao-entrega', { entrega: planoEntregaEntrega }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(response?.planos_trabalhos || []);
        }
      }, error => reject(error));
    });
  }

  public permissaoIncluir(unidade_id: string,): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.server.post('api/' + this.collection + '/permissao-incluir', { 
        unidade_id: unidade_id
      }).subscribe(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(!!response?.success);
        }
      }, error => reject(error));
    });
  }

}

