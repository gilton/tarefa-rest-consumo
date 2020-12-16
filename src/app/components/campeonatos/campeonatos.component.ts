import { CampeonatoService } from './../../services/campeonato.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CampeonatoList } from './../../models/campeonatos-list.model';
import { HttpErrorResponse }from '@angular/common/http';
import { Campeonato } from 'src/app/models/campeonato.model';

@Component({
	selector: 'app-campeonatos',
	templateUrl: './campeonatos.component.html',
	styleUrls: ['./campeonatos.component.css']
})
export class CampeonatosComponent implements OnInit {
	
	lista:Campeonato[] = [];
	
	constructor(private service:CampeonatoService) { }
	
	ngOnInit(): void {
		this.service.getAllCampeonatos()
		.subscribe((response:any) => {
			this.lista = response;
			console.log("lista:", this.lista);
		});
		
		
		
		
	}
	
	
	
}
