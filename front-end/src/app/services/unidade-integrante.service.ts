import { Injectable, Injector } from '@angular/core';
import { LookupItem, LookupService } from './lookup.service';
import { FormGroup } from '@angular/forms';
import { IntegranteConsolidado } from '../models/unidade-integrante.model';
import { Vinculo } from '../dao/unidade-integrante-dao.service';
import { IntegranteAtribuicao } from '../models/base.model';

@Injectable({
  providedIn: 'root'
})

export class UnidadeIntegranteService {

  public lookup: LookupService;

  constructor(public injector: Injector) {
    this.lookup = this.injector.get<LookupService>(LookupService);
  }

  public converterAtribuicoes(atribuicoes: string[]): LookupItem[] {
    return atribuicoes.map((x: string) => Object.assign({}, {
      key: x,
      value: this.lookup.getValue(this.lookup.UNIDADE_INTEGRANTE_TIPO, x),
      icon: this.lookup.getIcon(this.lookup.UNIDADE_INTEGRANTE_TIPO, x),
      color: this.lookup.getColor(this.lookup.UNIDADE_INTEGRANTE_TIPO, x)
    }))
  }

  public alterandoGestor(form: FormGroup, items: IntegranteConsolidado[]): string[] {
    let result: string[] = [];
    ['GESTOR', 'GESTOR_DELEGADO', 'GESTOR_SUBSTITUTO'].forEach(g => { if (form!.controls.atribuicoes.value.map((a: { key: string; }) => a.key).includes(g) && items.find(i => i.atribuicoes.includes(g as IntegranteAtribuicao))) result.push(this.lookup.getValue(this.lookup.UNIDADE_INTEGRANTE_TIPO, g)); });
    return result;
  }

  public ordenar(items: IntegranteConsolidado[]){
    items.sort((a, b) => {
      let x = (a.usuario_nome || a.unidade_nome)?.toLowerCase();
      let y = (b.usuario_nome || b.unidade_nome)?.toLowerCase();
      return x! < y! ? -1 : (x! > y! ? 1 : 0)
    });
    return items;
  }

  public converterEmVinculo(base: any, unidade_id: string, usuario_id: string, atribuicoes: IntegranteAtribuicao[] ): Vinculo {
    return Object.assign(base, { 'unidade_id': unidade_id, 'usuario_id': usuario_id, 'atribuicoes': atribuicoes });
  }
}