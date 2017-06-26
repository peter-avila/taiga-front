declare var _version: string;
import { NgModule } from "@angular/core";
import { Http, HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, UrlHandlingStrategy, UrlTree } from "@angular/router";

// NGRX MODULES
import { EffectsModule } from "@ngrx/effects";
import { RouterStoreModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

// TAIGA MODULES
import { AuthModule } from "./modules/auth/auth.module";
import { TgComponentsModule } from "./modules/components/components.module";
import { DiscoverModule } from "./modules/discover/discover.module";
import { HomeModule } from "./modules/home/home.module";
import { ProfileModule } from "./modules/profile/profile.module";
import { DetailModule } from "./modules/detail/detail.module";
import { KanbanModule } from "./modules/kanban/kanban.module";
import { BacklogModule } from "./modules/backlog/backlog.module";
import { EpicsModule } from "./modules/epics/epics.module";
import { IssuesModule } from "./modules/issues/issues.module";
import { WikiModule } from "./modules/wiki/wiki.module";
import { TeamModule } from "./modules/team/team.module";
import { AdminModule } from "./modules/admin/admin.module";
import { UserSettingsModule } from "./modules/user-settings/user-settings.module";
import { ProjectsModule } from "./modules/projects/projects.module";
import { ResourcesModule } from "./modules/resources/resources.module";
import { TgServicesModule } from "./modules/services/services.module";
import { TgBaseModule } from "./ts/modules/base/base.module";
import { TgPipesModule } from "./modules/pipes/pipes.module";

import { TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { NavigationBarModule } from "./modules/navigation-bar/navigation-bar.module";
import { ProjectsService } from "./modules/projects/projects.service";
import { TgCommonModule } from "./ts/modules/common/common.module";
import { DateRange } from "./ts/modules/common/components";
import { ProjectUrlService } from "./ts/modules/common/project-url.service";

import {AppComponent} from "./app.component";
import {GlobalEffects} from "./app.effects";
import {rootReducer} from "./app.store";

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, `/${_version}/locales/taiga/locale-`, ".json");
}

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    RouterModule.forRoot([]),
    ResourcesModule,
    DiscoverModule,
    ProjectsModule,
    TgCommonModule,
    TgBaseModule,
    TgServicesModule,
    TgComponentsModule,
    NavigationBarModule,
    AuthModule,
    ProfileModule,
    DetailModule,
    KanbanModule,
    BacklogModule,
    EpicsModule,
    IssuesModule,
    WikiModule,
    TeamModule,
    AdminModule,
    UserSettingsModule,
    TgPipesModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http],
        },
    }),
    StoreModule.provideStore(rootReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(GlobalEffects),
    RouterStoreModule.connectRouter(),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    ProjectsService,
    ProjectUrlService,
  ],
  entryComponents: [
    DateRange,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
