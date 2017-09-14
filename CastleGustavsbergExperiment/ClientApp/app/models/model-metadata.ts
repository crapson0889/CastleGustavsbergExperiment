export class ModelMetadata {
    public static getMetadataForType(type: string): ModelTypeMetadata  {
        return this.metadata[type];
    }

    private static metadata: { [index: string]: ModelTypeMetadata } = {
        "Task": {
            properties: ["id", "subject"]
        }
    }
}

// Need to look into how to I just return ModelTypeMetadata, without having to import ModelMetadata
export class ModelTypeMetadata {
    public static properties: string[];
}