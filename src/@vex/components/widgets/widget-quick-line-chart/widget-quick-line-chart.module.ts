import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetQuickLineChartComponent } from './widget-quick-line-chart.component';
import { ChartModule } from '../../chart/chart.module';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { SafeStyleModule } from '../../../pipes/safe-style/safe-style.module';
import { ShareBottomSheetModule } from '../../share-bottom-sheet/share-bottom-sheet.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [WidgetQuickLineChartComponent],
  imports: [
    CommonModule,
    ChartModule,
    MatIconModule,
    FlexLayoutModule,
    IconModule,
    SafeStyleModule,
    ShareBottomSheetModule,
    MatButtonModule
  ],
  exports: [WidgetQuickLineChartComponent]
})
export class WidgetQuickLineChartModule {
}

