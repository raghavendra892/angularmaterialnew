import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './shared/component/button/button.component';
import { ButtonToggleComponent } from './shared/component/button-toggle/button-toggle.component';
import { HomeComponent } from './shared/component/home/home.component';
import { IconComponent } from './shared/component/icon/icon.component';
import { InputComponent } from './shared/component/input/input.component';
import { BadgeComponent } from './shared/component/badge/badge.component';
import { SpinnerComponent } from './shared/component/spinner/spinner.component';
import { MenuComponent } from './shared/component/menu/menu.component';
import { CardComponent } from './shared/component/card/card.component';
import { BottomsheetComponent } from './shared/component/bottomsheet/bottomsheet.component';
import { BottomsheetHtmlComponent } from './shared/component/bottomsheet-html/bottomsheet-html.component';
import { ToolTipComponent } from './shared/component/tool-tip/tool-tip.component';
import { ListComponent } from './shared/component/list/list.component';
import { DividerComponent } from './shared/component/divider/divider.component';
import { DialogComponent } from './shared/component/dialog/dialog.component';
import { SelectComponent } from './shared/component/select/select.component';
import { SnackbarComponent } from './shared/component/snackbar/snackbar.component';
import { DialogHtmlComponent } from './shared/component/dialog-html/dialog-html.component';
import { RadioComponent } from './shared/component/radio/radio.component';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './shared/component/tabs/tabs.component';
import { CheckboxComponent } from './shared/component/checkbox/checkbox.component';
import { ChipsComponent } from './shared/component/chips/chips.component';
import { DatepickerComponent } from './shared/component/datepicker/datepicker.component';
import { GridlistnComponent } from './shared/component/gridlistn/gridlistn.component';
import { StepperComponent } from './shared/component/stepper/stepper.component';
import { SidenavComponent } from './shared/component/sidenav/sidenav.component';
import { ToolbarComponent } from './shared/component/toolbar/toolbar.component';
import { FormFieldComponent } from './shared/component/form-field/form-field.component';




@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonToggleComponent,
    HomeComponent,
    IconComponent,
    InputComponent,
    BadgeComponent,
    SpinnerComponent,
    MenuComponent,
    CardComponent,
    BottomsheetComponent,
    BottomsheetHtmlComponent,
    ToolTipComponent,
    ListComponent,
    DividerComponent,
    DialogComponent,
    SelectComponent,
    SnackbarComponent,
    DialogHtmlComponent,
    RadioComponent,
    TabsComponent,
    CheckboxComponent,
    ChipsComponent,
    DatepickerComponent,
    GridlistnComponent,
    StepperComponent,
    SidenavComponent,
    ToolbarComponent,
    FormFieldComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
