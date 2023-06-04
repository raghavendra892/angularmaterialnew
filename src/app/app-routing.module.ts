import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { ButtonComponent } from './shared/component/button/button.component';
import { ButtonToggleComponent } from './shared/component/button-toggle/button-toggle.component';
import { IconComponent } from './shared/component/icon/icon.component';
import { InputComponent } from './shared/component/input/input.component';
import { BadgeComponent } from './shared/component/badge/badge.component';
import { SpinnerComponent } from './shared/component/spinner/spinner.component';
import { MenuComponent } from './shared/component/menu/menu.component';
import { CardComponent } from './shared/component/card/card.component';
import { BottomsheetComponent } from './shared/component/bottomsheet/bottomsheet.component';
import { ToolTipComponent } from './shared/component/tool-tip/tool-tip.component';
import { ListComponent } from './shared/component/list/list.component';
import { DividerComponent } from './shared/component/divider/divider.component';
import { DialogComponent } from './shared/component/dialog/dialog.component';
import { SelectComponent } from './shared/component/select/select.component';
import { SnackbarComponent } from './shared/component/snackbar/snackbar.component';
import { RadioComponent } from './shared/component/radio/radio.component';
import { TabsComponent } from './shared/component/tabs/tabs.component';
import { CheckboxComponent } from './shared/component/checkbox/checkbox.component';
import { ChipsComponent } from './shared/component/chips/chips.component';
import { DatepickerComponent } from './shared/component/datepicker/datepicker.component';
import { GridlistnComponent } from './shared/component/gridlistn/gridlistn.component';
import { StepperComponent } from './shared/component/stepper/stepper.component';
import { SidenavComponent } from './shared/component/sidenav/sidenav.component';
import { ToolbarComponent } from './shared/component/toolbar/toolbar.component';
import { FormFieldComponent } from './shared/component/form-field/form-field.component';


const routes: Routes = [
  {path: '' , component : HomeComponent},
  {path : 'button', component: ButtonComponent},
  {path : 'buttontoggle', component: ButtonToggleComponent},
  {path : 'icon', component: IconComponent},
  {path : 'input', component: InputComponent},
  {path : 'badge', component: BadgeComponent},
  {path : 'spinner', component: SpinnerComponent},
  {path : 'menu', component: MenuComponent},
  {path : 'card', component: CardComponent},
  {path : 'bootmsheet', component: BottomsheetComponent},
  {path : 'tooltip', component: ToolTipComponent},
  {path : 'list', component: ListComponent},
  {path : 'divider', component: DividerComponent},
  {path : 'formfield', component: FormFieldComponent},
  {path : 'dialog', component: DialogComponent},
  {path : 'select', component: SelectComponent},
  {path : 'snackbar', component: SnackbarComponent},
  {path : 'radio', component: RadioComponent},
  {path : 'tabs', component: TabsComponent},
  {path : 'checkbox', component: CheckboxComponent},
  {path : 'chips', component: ChipsComponent},
  {path : 'datepicker', component: DatepickerComponent},
  {path : 'gridlist', component: GridlistnComponent},
  {path : 'stepper', component: StepperComponent},
  {path : 'sidenav', component: SidenavComponent},
  {path : 'toolbar', component: ToolbarComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
