import { Component, Input } from '@angular/core';

import { ModelMetadata, ModelTypeMetadata } from '../../models/model-metadata';

@Component({
    selector: 'view-helper',
    templateUrl: './view.component.html',
    styles: [`
        label:after {
            content: ": ";
        }
    `]
})
export class ViewComponent {
    private _data: any;
    private typeMetadata: ModelTypeMetadata;

    @Input() type: string;

    @Input() set data(value: any) {
        if (value != null) {
            this._data = value;
            console.log("view data set");

            this.typeMetadata = ModelMetadata.getMetadataForType(this.type);
        }
    }
}
