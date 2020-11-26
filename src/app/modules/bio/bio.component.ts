import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

// Custom services
import { OFFSET_OF_PAGE, SIZE_OF_DOCUMENTS_PER_PAGE, TorreAPIService } from 'src/app/shared/services/torre-api.service';

// Custom Models
import { PeopleModel } from 'src/app/shared/models/people.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit, OnDestroy {
  private _activatedRouteQueryParamFilterSubscription$: Subscription
  public biosBehaviorSubject$: BehaviorSubject<PeopleModel[]> = new BehaviorSubject(null)

  constructor(
    private _torreAPIService: TorreAPIService,
    private _title: Title,
    private _meta: Meta,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.startActivatedRouteQueryParamFilterSubscription()

    const queryParams: ParamMap = this._activatedRoute.snapshot.queryParamMap
    if (!queryParams.get('aggregate')
      && !queryParams.get('offset')
      && !queryParams.get('size'))
      this.list();
  }

  ngOnDestroy(): void {
    if (this.biosBehaviorSubject$)
      this.biosBehaviorSubject$.unsubscribe()

    if (this._activatedRouteQueryParamFilterSubscription$)
      this._activatedRouteQueryParamFilterSubscription$.unsubscribe()
  }

  private startActivatedRouteQueryParamFilterSubscription(): void {
    this._activatedRouteQueryParamFilterSubscription$ = this._activatedRoute.queryParamMap.pipe(
      filter((paramMap: ParamMap) => !!paramMap.get('aggregate')
        || !!paramMap.get('offset')
        || !!paramMap.get('size')
      )
    ).subscribe((paramMap: ParamMap) => this.list(paramMap.get('aggregate'), Number(paramMap.get('offset')), Number(paramMap.get('size'))))
  }

  list(aggregate: string = null, offset: number = OFFSET_OF_PAGE, size: number = SIZE_OF_DOCUMENTS_PER_PAGE): void {
    this._torreAPIService.people(aggregate, offset, size)
      .subscribe(
        (bios: PeopleModel[]) => {
          this._title.setTitle(`${environment.configuration.list.people.title} / ${environment.configuration.general.title}`)

          this._meta.updateTag({
            name: 'description',
            content: bios.reduce((description: string, person: PeopleModel) => `${person.professionalHeadline}, ${description} `, '')
          })

          this._meta.updateTag({
            name: 'keywords',
            content: bios.reduce((keywords: string, person: PeopleModel) => `${person.skills.join(', ')}, ${keywords} `, '')
          })

          this.biosBehaviorSubject$.next(bios)
        }
      )
  }

  trackByFunction(person: PeopleModel): string {
    return person.username
  }
}
