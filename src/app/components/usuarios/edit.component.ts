import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'usuario-edit',
  templateUrl: 'edit.component.html',
})
export class UsuarioEditComponent implements OnInit {
  title: string = 'usuario edit works';
  id: number | null = null;
  constructor(private activadedRoute: ActivatedRoute) {
    this.activadedRoute.parent?.params.subscribe((p) => {
      this.id = p['id'];
    });
  }
  ngOnInit() {}
}
