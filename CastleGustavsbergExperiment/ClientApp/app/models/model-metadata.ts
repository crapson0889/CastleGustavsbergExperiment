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

export class ModelTypeMetadata {
    public static properties: string[];
}