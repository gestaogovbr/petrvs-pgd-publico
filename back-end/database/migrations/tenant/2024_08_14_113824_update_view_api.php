<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("CREATE OR REPLACE VIEW `view_api_pgd` AS
select
    `usuarios`.`id` AS `id`,
    'participante' AS `tipo`,
    NULL AS `json_audit`,
    1 AS `fonte`
from
    (`usuarios`
join `programas_participantes` on
    (`usuarios`.`id` = `programas_participantes`.`usuario_id`))
where
    `usuarios`.`data_envio_api_pgd` is null
    and `usuarios`.`deleted_at` is null
    and `programas_participantes`.`deleted_at` is null
    and exists(
    select
        `pt`.`id`
    from
        `planos_trabalhos` `pt`
    where
        `pt`.`usuario_id` = `usuarios`.`id`
        and `pt`.`deleted_at` is null
    limit 1)
union all
select
    `planos_trabalhos`.`id` AS `id`,
    'trabalho' collate utf8mb4_unicode_ci AS `tipo`,
    NULL AS `json_audit`,
    2 AS `fonte`
from
    `planos_trabalhos`
where
    `planos_trabalhos`.`deleted_at` is null
    and `planos_trabalhos`.`data_envio_api_pgd` is null
    and `planos_trabalhos`.`status` in ('ATIVO', 'CONCLUIDO', 'AVALIADO')
union all
select
    `planos_entregas`.`id` AS `id`,
    'entrega' collate utf8mb4_unicode_ci AS `tipo`,
    NULL AS `json_audit`,
    3 AS `fonte`
from
    `planos_entregas`
where
    `planos_entregas`.`deleted_at` is null
    and `planos_entregas`.`data_envio_api_pgd` is null
    and `planos_entregas`.`status` in ('ATIVO', 'CONCLUIDO', 'AVALIADO')
union all
select
    `t1`.`id` AS `id`,
    `t1`.`tipo` collate utf8mb4_unicode_ci AS `tipo`,
    `t1`.`json_audit` AS `json_audit`,
    4 AS `fonte`
from
    (
    select
        `d`.`usuario_id` AS `id`,
        'participante' collate utf8mb4_unicode_ci AS `tipo`,
        json_arrayagg(`a`.`id`) AS `json_audit`
    from
        (`audits` `a`
    join `programas_participantes` `d` on
        (`a`.`auditable_id` = `d`.`id`))
    where
        `a`.`auditable_type` like '%ProgramaParticipante'
        and (`a`.`tags` like '%ERRO%'
            or `a`.`tags` is null)
        and `d`.`deleted_at` is null
        and exists(
        select
            `pt`.`id`
        from
            `planos_trabalhos` `pt`
        where
            `pt`.`usuario_id` = `d`.`usuario_id`
            and `pt`.`deleted_at` is null
        limit 1)
    group by
        `d`.`usuario_id`) `t1`
union all
select
    `t2`.`id` AS `id`,
    `t2`.`tipo` collate utf8mb4_unicode_ci AS `tipo`,
    `t2`.`json_audit` AS `json_audit`,
    5 AS `fonte`
from
    (
    select
        `d`.`usuario_id` AS `id`,
        'participante' collate utf8mb4_unicode_ci AS `tipo`,
        json_arrayagg(`a`.`id`) AS `json_audit`
    from
        (`audits` `a`
    join `documentos_assinaturas` `d` on
        (`a`.`auditable_id` = `d`.`id`))
    where
        `a`.`auditable_type` like '%DocumentoAssinatura'
        and (`a`.`tags` like '%ERRO%'
            or `a`.`tags` is null)
        and `d`.`deleted_at` is null
        and exists(
        select
            `pt`.`id`
        from
            `planos_trabalhos` `pt`
        where
            `pt`.`usuario_id` = `d`.`usuario_id`
            and `pt`.`deleted_at` is null
        limit 1)
    group by
        `d`.`usuario_id`) `t2`
union all
select
    `t3`.`id` AS `id`,
    `t3`.`tipo` collate utf8mb4_unicode_ci AS `tipo`,
    `t3`.`json_audit` AS `json_audit`,
    6 AS `fonte`
from
    (
    select
        `d`.`id` AS `id`,
        'participante' collate utf8mb4_unicode_ci AS `tipo`,
        json_arrayagg(`a`.`id`) AS `json_audit`
    from
        (`audits` `a`
    join `usuarios` `d` on
        (`a`.`auditable_id` = `d`.`id`))
    where
        `a`.`auditable_type` like '%Usuario'
        and (`a`.`tags` like '%ERRO%'
            or `a`.`tags` is null)
        and `d`.`deleted_at` is null
        and exists(
        select
            `pt`.`id`
        from
            `planos_trabalhos` `pt`
        where
            `pt`.`usuario_id` = `d`.`id`
            and `pt`.`deleted_at` is null
        limit 1)
    group by
        `d`.`id`) `t3`
union all
select
    `t4`.`id` AS `id`,
    `t4`.`tipo` collate utf8mb4_unicode_ci AS `tipo`,
    `t4`.`json_audit` AS `json_audit`,
    7 AS `fonte`
from
    (
    select
        `d`.`id` AS `id`,
        'trabalho' collate utf8mb4_unicode_ci AS `tipo`,
        json_arrayagg(`a`.`id`) AS `json_audit`
    from
        (`audits` `a`
    join `planos_trabalhos` `d` on
        (`a`.`auditable_id` = `d`.`id`))
    where
        `a`.`auditable_type` like '%PlanoTrabalho'
        and (`a`.`tags` like '%ERRO%'
            or `a`.`tags` is null)
        and `d`.`deleted_at` is null
        and `d`.`status` in ('ATIVO', 'CONCLUIDO', 'AVALIADO')
    group by
        `d`.`id`) `t4`
union all
select
    `t5`.`id` AS `id`,
    `t5`.`tipo` collate utf8mb4_unicode_ci AS `tipo`,
    `t5`.`json_audit` AS `json_audit`,
    8 AS `fonte`
from
    (
    select
        `d`.`plano_trabalho_id` AS `id`,
        'trabalho' collate utf8mb4_unicode_ci AS `tipo`,
        json_arrayagg(`a`.`id`) AS `json_audit`
    from
        ((`audits` `a`
    join `planos_trabalhos_consolidacoes` `d` on
        (`a`.`auditable_id` = `d`.`id`))
    join `planos_trabalhos` `pt` on
        (`pt`.`id` = `d`.`plano_trabalho_id`))
    where
        `a`.`auditable_type` like '%PlanoTrabalhoConsolidacao'
        and (`a`.`tags` like '%ERRO%'
            or `a`.`tags` is null)
        and `d`.`deleted_at` is null
        and `pt`.`status` in ('ATIVO', 'CONCLUIDO', 'AVALIADO')
            and `pt`.`deleted_at` is null
        group by
            `d`.`plano_trabalho_id`) `t5`
union all
select
    `t6`.`id` AS `id`,
    `t6`.`tipo` collate utf8mb4_unicode_ci AS `tipo`,
    `t6`.`json_audit` AS `json_audit`,
    9 AS `fonte`
from
    (
    select
        `d`.`plano_trabalho_id` AS `id`,
        'trabalho' collate utf8mb4_unicode_ci AS `tipo`,
        json_arrayagg(`a`.`id`) AS `json_audit`
    from
        ((`audits` `a`
    join `planos_trabalhos_entregas` `d` on
        (`a`.`auditable_id` = `d`.`id`))
    join `planos_trabalhos` `pt` on
        (`pt`.`id` = `d`.`plano_trabalho_id`))
    where
        `a`.`auditable_type` like '%PlanoTrabalhoEntrega'
        and (`a`.`tags` like '%ERRO%'
            or `a`.`tags` is null)
        and `d`.`deleted_at` is null
        and `pt`.`status` in ('ATIVO', 'CONCLUIDO', 'AVALIADO')
            and `pt`.`deleted_at` is null
        group by
            `d`.`plano_trabalho_id`) `t6`
union all
select
    `t7`.`id` AS `id`,
    `t7`.`tipo` collate utf8mb4_unicode_ci AS `tipo`,
    `t7`.`json_audit` AS `json_audit`,
    10 AS `fonte`
from
    (
    select
        `d`.`id` AS `id`,
        'entrega' collate utf8mb4_unicode_ci AS `tipo`,
        json_arrayagg(`a`.`id`) AS `json_audit`
    from
        (`audits` `a`
    join `planos_entregas` `d` on
        (`a`.`auditable_id` = `d`.`id`))
    where
        `a`.`auditable_type` like '%PlanoEntrega'
        and (`a`.`tags` like '%ERRO%'
            or `a`.`tags` is null)
        and `d`.`status` in ('ATIVO', 'CONCLUIDO', 'AVALIADO')
            and `d`.`deleted_at` is null
        group by
            `d`.`id`) `t7`
union all
select
    `t8`.`id` AS `id`,
    `t8`.`tipo` collate utf8mb4_unicode_ci AS `tipo`,
    `t8`.`json_audit` AS `json_audit`,
    11 AS `fonte`
from
    (
    select
        `d`.`plano_entrega_id` AS `id`,
        'entrega' collate utf8mb4_unicode_ci AS `tipo`,
        json_arrayagg(`a`.`id`) AS `json_audit`
    from
        ((`audits` `a`
    join `planos_entregas_entregas` `d` on
        (`a`.`auditable_id` = `d`.`id`))
    join `planos_entregas` `pe` on
        (`pe`.`id` = `d`.`plano_entrega_id`))
    where
        `a`.`auditable_type` like '%PlanoEntregaEntrega'
        and (`a`.`tags` like '%ERRO%'
            or `a`.`tags` is null)
        and `d`.`deleted_at` is null
        and `pe`.`status` in ('ATIVO', 'CONCLUIDO', 'AVALIADO')
    group by
        `d`.`plano_entrega_id`) `t8`");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
