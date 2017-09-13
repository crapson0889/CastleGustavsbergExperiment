import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ModelMetadata, ModelTypeMetadata } from '../../models/model-metadata';

@Component({
    selector: 'table-helper',
    templateUrl: './table.component.html',
    styles: [`
        td:hover 
        {
            cursor: pointer;
        }
    `]
})
export class TableComponent {
    private _data: any[];
    private typeMetadata: ModelTypeMetadata;

    @Input() type: string;

    @Input() set data(value: any[]) {
        if (value != null && value.length > 0) {
            this._data = value;

            this.typeMetadata = ModelMetadata.getMetadataForType(this.type);
            console.log(this.typeMetadata);
        }
    }

    @Output('row-click')
    eventRowClick: EventEmitter<any> = new EventEmitter<any>();

    private rowClicked(item: any): void {
        console.log("row clicked");
        console.log(item);

        this.eventRowClick.emit(item);
    }
}
