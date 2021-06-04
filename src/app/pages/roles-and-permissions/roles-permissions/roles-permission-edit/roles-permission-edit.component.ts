import { Component, OnInit } from '@angular/core';
import { RolesAndPermissionsService } from '../../services/roles-and-permissions.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeUntil, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { subscribedContainerMixin } from '../../../../shared/mixins/subscribed-container.mixin';
import { formMixin } from '../../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-roles-permission-edit',
  templateUrl: './roles-permission-edit.component.html',
  styleUrls: ['./roles-permission-edit.component.css']
})
export class RolesPermissionEditComponent extends subscribedContainerMixin(formMixin()) implements OnInit {
  role: any;
  role$: Observable<any> = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    tap(id => this.roleId = id),
    mergeMap(id => this.rolesPermissionService.getAllPermissionsStatusForRole(id)));
  isLoading = true;
  permissionsForm = this.fb.group({
    permissions: this.fb.array([])
  });
  roleId: number | undefined;

  constructor(
    private rolesPermissionService: RolesAndPermissionsService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit() {
    this.role$.subscribe(res => {
      this.isLoading = false;
      this.role = res;
      this.updatePermissionsForm();
    });
  }

  updatePermissionsForm() {
    this.permissionsForm = this.fb.group({
      permissions: this.fb.array([])
    });

    this.role.permissionStatus.forEach(({id, hasPermission, name}: any) => {
      this.formPermissions.push(this.fb.group({
        id: [id, [Validators.required]],
        name: [name],
        hasPermission: [hasPermission]
      }));
    });
  }

  get formPermissions() {
    return this.permissionsForm.get('permissions') as FormArray;
  }

  submitPermission() {
    this.submitInProgressSubject$.next(true);
    this.formPermissions.controls
      .filter(control => control.dirty)
      .map(control => control.value)
      .forEach(({name, hasPermission}) => {
        this.rolesPermissionService.updatePermissionForRoleWithId(this.roleId as number, {name, hasPermission})
          .pipe(
            takeUntil(this.destroyed$),
            tap(() => this.submitInProgressSubject$.next(true))
          )
          .subscribe();
      });
  }

}
