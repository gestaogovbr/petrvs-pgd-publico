import {Component, Injector, ViewChild} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {GridComponent} from "src/app/components/grid/grid.component";
import {ToolbarButton} from "src/app/components/toolbar/toolbar.component";
import {TenantDaoService} from "src/app/dao/tenant-dao.service";
import {Tenant} from "src/app/models/tenant.model";
import {PageListBase} from "src/app/modules/base/page-list-base";
import {AuthPanelService} from "../../../services/auth-panel.service";

@Component({
	selector: "app-panel-list",
	templateUrl: "./panel-list.component.html",
	styleUrls: ["./panel-list.component.scss"],
})
export class PanelListComponent extends PageListBase<Tenant, TenantDaoService> {
	@ViewChild(GridComponent, {static: false}) public grid?: GridComponent;

	public currentUser: any;
	public tenants: Tenant[] = [];

	public toolbarButtons: ToolbarButton[] = [
		{
			icon: "bi bi-eye-fill",
			label: "Ver Logs",
			onClick: () => this.go.navigate({route: ["panel", "logs2"]}),
		},
		{
			icon: "bi bi-database-add",
			label: "Executar Migrations",

			onClick: this.executaMigrations.bind(this),
		},

		{
			icon: "bi-database-fill-gear",
			label: "Executar Seeder",
			onClick: (tenant: Tenant) =>
				this.go.navigate({route: ["panel", "seeder"]}),
		},
		{
			icon: "bi-database-fill-gear",
			label: "Job Agendados",
			onClick: (tenant: Tenant) =>
				this.go.navigate({route: ["panel", "job-agendados"]}),
		},
		{
			icon: "bi bi-plus",
			label: "Inserir Tenant",
			color: "btn-success",
			onClick: this.add.bind(this),
		},

		// {
		//   icon: "bi bi-database-x",
		//   label: "Resetar DB",
		//   disabled: this.gb.ENV==='production',
		//   onClick: this.resetDB.bind(this)
		// }
	];

	constructor(
		public injector: Injector,
		dao: TenantDaoService,
		private authService: AuthPanelService
	) {
		super(injector, Tenant, TenantDaoService);
		/* Inicializações */

		this.code = "PANEL";
		this.filter = this.fh.FormBuilder({});

		this.options.push({
			icon: "bi bi-info-circle",
			label: "Informações",
			onClick: this.consult.bind(this),
		});
		this.options.push({
			icon: "bi bi-info-circle",
			label: "Executar Migrations",
			onClick: this.executaMigrations.bind(this),
		});

		this.options.push({
			icon: "bi bi-trash",
			label: "Excluir",
			onClick: this.deleteTenant.bind(this),
		});

		this.options.push({
			icon: "bi bi-database-fill-gear",
			label: "Executar Seeder",
			onClick: (tenant: Tenant) =>
				this.go.navigate(
					{route: ["panel", "seeder"]},
					{metadata: {tenant_id: tenant.id}}
				),
		});

		this.options.push({
			icon: "bi bi-database-fill-gear",
			label: "Job agendados",
			onClick: (tenant: Tenant) =>
				this.go.navigate(
					{route: ["panel", "job-agendados"]},
					{metadata: {tenant_id: tenant.id}}
				),
		});
	}

	async onLoad() {
		await this.loadTenants();
		super.onLoad();
	}

  public dynamicOptions(row: any): ToolbarButton[] {
    return this.currentUser && this.currentUser.nivel == 1 ? this.options : [];
  }

	public dynamicButtons(row: any): ToolbarButton[] {
		let result: ToolbarButton[] = [];
		if (this.currentUser && this.currentUser.nivel === 1) {
			result.push({
				label: "Apagar dados",
				icon: "bi bi-database-dash",
				color: "danger",
				onClick: this.cleanDB.bind(this),
			});
		}
		return result;
	}

	private loadTenants(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.authService
				.detailUser()
				.then((user) => {
					this.currentUser = user;
					this.tenants = user.tenants;
					resolve();
				})
				.catch((error) => {
					reject(error);
				});
		});
	}

	public filterWhere = (filter: FormGroup) => {
		let result: any[] = [];
		if (this.tenants && this.tenants.length > 0) {
			result.push(["id", "in", this.tenants]); // Usa os tenants carregados
		}
		return result;
	};

	public cleanDB(row: any) {
		const self = this;
		this.dialog
			.confirm("Deseja apagar os dados?", "Essa ação é irreversível")
			.then((confirm) => {
				if (confirm) {
					self.loading = true;
					this.dao!.cleanDB(row)
						.then(function () {
							self.loading = false;
							self.dialog.alert("Sucesso", "Executado com sucesso!");
							window.location.reload();
						})
						.catch(function (error) {
							self.loading = false;
							self.dialog.alert(
								"Erro",
								"Erro ao executar: " + error?.message ? error?.message : error
							);
						});
				}
			});
	}

	public resetDB(row: any) {
		const self = this;
		this.dialog
			.confirm("Deseja Resetar o DB?", "Deseja realmente executar o reset?")
			.then((confirm) => {
				if (confirm) {
					self.loading = true;
					this.dao!.resetDB()
						.then(function () {
							self.loading = false;
							self.dialog.alert("Sucesso", "Executado com sucesso!");
							window.location.reload();
						})
						.catch(function (error) {
							self.loading = false;
							self.dialog.alert(
								"Erro",
								"Erro ao executar: " + error?.message ? error?.message : error
							);
						});
				}
			});
	}
	public executaMigrations(row: any) {
		const self = this;
		this.dialog
			.confirm(
				"Executar Migration?",
				"Deseja realmente executar as migrations?"
			)
			.then((confirm) => {
				if (confirm) {
					this.dao!.migrations(row)
						.then(function () {
							self.dialog.alert("Sucesso", "Migration executada com sucesso!");
						})
						.catch(function (error) {
							self.dialog.alert(
								"Erro",
								"Erro ao executar a migration: " + error?.message
									? error?.message
									: error
							);
						});
				}
			});
	}
	public executaSeeders(row: any) {
		const self = this;
		this.dialog
			.confirm("Executar Seeder?", "Deseja realmente executar as seeders?")
			.then((confirm) => {
				if (confirm) {
					this.dao!.seeders(row)
						.then(function () {
							self.dialog.alert("Sucesso", "Migration executada com sucesso!");
						})
						.catch(function (error) {
							self.dialog.alert(
								"Erro",
								"Erro ao executar a migration: " + error?.message
									? error?.message
									: error
							);
						});
				}
			});
	}

	public executaMigrationTenant(row: any) {
		const self = this;
		this.dialog
			.confirm(
				"Executar Migration?",
				"Deseja realmente executar as migrations?"
			)
			.then((confirm) => {
				if (confirm) {
					this.dao!.tiposCapacidadesSeeder(row)
						.then(function () {
							self.dialog.alert("Sucesso", "Migration executada com sucesso!");
						})
						.catch(function (error) {
							self.dialog.alert(
								"Erro",
								"Erro ao executar a migration: " + error?.message
									? error?.message
									: error
							);
						});
				}
			});
	}

	public tipoCapacidadeSeeder(row: any) {
		const self = this;
		this.dialog
			.confirm("Executar Seeder?", "Deseja realmente atualizar as capacidades?")
			.then((confirm) => {
				if (confirm) {
					this.dao!.tiposCapacidadesSeeder(row)
						.then(function () {
							self.dialog.alert("Sucesso", "Seeder executada com sucesso!");
						})
						.catch(function (error) {
							self.dialog.alert(
								"Erro",
								"Erro ao executar a seeder: " + error?.message
									? error?.message
									: error
							);
						});
				}
			});
	}

	public cidadeSeeder(row: any) {
		const self = this;
		this.dialog
			.confirm(
				"Executar Seeder?",
				"Deseja realmente executar a seeder de cidades?"
			)
			.then((confirm) => {
				if (confirm) {
					this.dao!.cidadesSeeder(row)
						.then(function () {
							self.dialog.alert("Sucesso", "Seeder executada com sucesso!");
						})
						.catch(function (error) {
							self.dialog.alert(
								"Erro",
								"Erro ao executar a seeder: " + error?.message
									? error?.message
									: error
							);
						});
				}
			});
	}

	public usuariosSeeder(row: any) {
		const self = this;
		this.dialog
			.confirm("Executar Seeder?", "Deseja realmente atualizar as capacidades?")
			.then((confirm) => {
				if (confirm) {
					this.dao!.usuarioSeeder(row)
						.then(function () {
							self.dialog.alert("Sucesso", "Seeder executada com sucesso!");
						})
						.catch(function (error) {
							self.dialog.alert(
								"Erro",
								"Erro ao executar a seeder: " + error?.message
									? error?.message
									: error
							);
						});
				}
			});
	}

	public entidadesSeeder(row: any) {
		const self = this;
		this.dialog
			.confirm("Executar Seeder?", "Deseja realmente atualizar as capacidades?")
			.then((confirm) => {
				if (confirm) {
					this.dao!.entidadeSeeder(row)
						.then(function () {
							self.dialog.alert("Sucesso", "Seeder executada com sucesso!");
						})
						.catch(function (error) {
							self.dialog.alert(
								"Erro",
								"Erro ao executar a seeder: " + error?.message
									? error?.message
									: error
							);
						});
				}
			});
	}
	public databaseSeeder(row: any) {
		const self = this;
		this.dialog
			.confirm("Executar Seeder?", "Deseja realmente atualizar as capacidades?")
			.then((confirm) => {
				if (confirm) {
					this.dao!.entidadeSeeder(row)
						.then(function () {
							self.dialog.alert("Sucesso", "Seeder executada com sucesso!");
						})
						.catch(function (error) {
							self.dialog.alert(
								"Erro",
								"Erro ao executar a seeder: " + error?.message
									? error?.message
									: error
							);
						});
				}
			});
	}

	public deleteTenant(row: any) {
		const self = this;
		this.dialog
			.confirm(
				"Excluir Tenant?",
				"Deseja realmente excluir esse tenant (" + row.id + ")? "
			)
			.then((confirm) => {
				if (confirm) {
					this.dao!.deleteTenant(row)
						.then(function () {
							self.dialog.alert("Sucesso", "Migration executada com sucesso!");
						})
						.catch(function (error) {
							self.dialog.alert(
								"Erro",
								"Erro ao executar a migration: " + error?.message
									? error?.message
									: error
							);
						});
				}
			});
	}
}
